import os
import re
import docx
from docx import Document
from docx.shared import Inches, Pt, RGBColor, Cm
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.enum.table import WD_TABLE_ALIGNMENT, WD_ALIGN_VERTICAL
from docx.oxml import OxmlElement, parse_xml
from docx.oxml.ns import nsdecls, qn

def set_cell_background(cell, fill_hex):
    tcPr = cell._tc.get_or_add_tcPr()
    shd = parse_xml(f'<w:shd {nsdecls("w")} w:fill="{fill_hex}"/>')
    tcPr.append(shd)

def set_cell_margins(cell, top=100, bottom=100, left=150, right=150):
    tcPr = cell._tc.get_or_add_tcPr()
    tcMar = parse_xml(f'<w:tcMar {nsdecls("w")}><w:top w:w="{top}" w:type="dxa"/><w:bottom w:w="{bottom}" w:type="dxa"/><w:left w:w="{left}" w:type="dxa"/><w:right w:w="{right}" w:type="dxa"/></w:tcMar>')
    tcPr.append(tcMar)

def set_cell_border(cell, **kwargs):
    """
    kwargs: top, bottom, left, right
    values: dict(sz=12, val='single', color='FF0000', space='0')
    """
    tc = cell._tc
    tcPr = tc.get_or_add_tcPr()
    tcBorders = parse_xml(
        f'<w:tcBorders {nsdecls("w")}>\n'
        f'<w:top w:val="{kwargs.get("top", "single")}" w:sz="{kwargs.get("top_sz", "4")}" w:space="0" w:color="{kwargs.get("top_color", "CCCCCC")}"/>\n'
        f'<w:left w:val="{kwargs.get("left", "single")}" w:sz="{kwargs.get("left_sz", "4")}" w:space="0" w:color="{kwargs.get("left_color", "CCCCCC")}"/>\n'
        f'<w:bottom w:val="{kwargs.get("bottom", "single")}" w:sz="{kwargs.get("bottom_sz", "4")}" w:space="0" w:color="{kwargs.get("bottom_color", "CCCCCC")}"/>\n'
        f'<w:right w:val="{kwargs.get("right", "single")}" w:sz="{kwargs.get("right_sz", "4")}" w:space="0" w:color="{kwargs.get("right_color", "CCCCCC")}"/>\n'
        f'</w:tcBorders>'
    )
    tcPr.append(tcBorders)

def add_page_number_to_section(section, start_type='decimal', start_num=1):
    footer = section.footer
    p = footer.paragraphs[0]
    p.alignment = WD_ALIGN_PARAGRAPH.RIGHT
    run = p.add_run()
    fldSimple = parse_xml(r'<w:fldSimple %s w:instr="PAGE"/>' % nsdecls('w'))
    run._r.append(fldSimple)

def apply_text_formatting(paragraph, text, base_font_size=12, is_bold_base=False, is_italic_base=False, font_name="Times New Roman", text_color=RGBColor(0,0,0)):
    # Simple regex parser for **bold** and *italic*
    tokens = re.split(r'(\*\*.*?\*\*|\*.*?\*|`.*?`)', text)
    for token in tokens:
        if not token:
            continue
        if token.startswith('**') and token.endswith('**') and len(token) >= 4:
            clean = token[2:-2]
            run = paragraph.add_run(clean)
            run.font.name = font_name
            run.font.size = Pt(base_font_size)
            run.font.bold = True
            run.font.italic = is_italic_base
            run.font.color.rgb = text_color
        elif token.startswith('*') and token.endswith('*') and len(token) >= 2:
            clean = token[1:-1]
            run = paragraph.add_run(clean)
            run.font.name = font_name
            run.font.size = Pt(base_font_size)
            run.font.bold = is_bold_base
            run.font.italic = True
            run.font.color.rgb = text_color
        elif token.startswith('`') and token.endswith('`') and len(token) >= 2:
            clean = token[1:-1]
            run = paragraph.add_run(clean)
            run.font.name = "Consolas"
            run.font.size = Pt(base_font_size - 1)
            run.font.bold = is_bold_base
            run.font.color.rgb = RGBColor(30, 64, 175)
        else:
            run = paragraph.add_run(token)
            run.font.name = font_name
            run.font.size = Pt(base_font_size)
            run.font.bold = is_bold_base
            run.font.italic = is_italic_base
            run.font.color.rgb = text_color

def build_docx(md_path, docx_path):
    with open(md_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()

    doc = Document()

    # Page Margins standard 4-4-3-3 (Top 4cm, Left 4cm, Bottom 3cm, Right 3cm)
    for section in doc.sections:
        section.top_margin = Cm(4)
        section.left_margin = Cm(4)
        section.bottom_margin = Cm(3)
        section.right_margin = Cm(3)
        section.page_width = Cm(21.0)   # A4
        section.page_height = Cm(29.7)

    # Configure Normal Style
    normal_style = doc.styles['Normal']
    normal_style.font.name = 'Times New Roman'
    normal_style.font.size = Pt(12)
    normal_style.font.color.rgb = RGBColor(0, 0, 0)
    normal_style.paragraph_format.line_spacing = 1.5
    normal_style.paragraph_format.space_after = Pt(4)
    normal_style.paragraph_format.space_before = Pt(0)
    normal_style.paragraph_format.alignment = WD_ALIGN_PARAGRAPH.JUSTIFY

    # Parser state
    in_code_block = False
    code_block_lines = []
    code_block_lang = ""
    in_table = False
    table_rows = []
    
    # Process line by line
    i = 0
    total_lines = len(lines)
    
    while i < total_lines:
        line = lines[i].rstrip('\r\n')
        
        # Check for code block fence
        if line.strip().startswith('```'):
            if not in_code_block:
                in_code_block = True
                code_block_lang = line.strip().replace('```', '')
                code_block_lines = []
            else:
                # Flush code block
                in_code_block = False
                # Render code block as an elegant styled table callout
                table = doc.add_table(rows=1, cols=1)
                table.alignment = WD_TABLE_ALIGNMENT.CENTER
                cell = table.cell(0, 0)
                set_cell_background(cell, "F8FAFC")
                set_cell_border(cell, top="single", top_sz="4", top_color="CBD5E1",
                                bottom="single", bottom_sz="4", bottom_color="CBD5E1",
                                left="single", left_sz="12", left_color="3B82F6",
                                right="single", right_sz="4", right_color="CBD5E1")
                set_cell_margins(cell, top=140, bottom=140, left=200, right=200)
                
                cp = cell.paragraphs[0]
                cp.paragraph_format.line_spacing = 1.15
                cp.paragraph_format.space_before = Pt(0)
                cp.paragraph_format.space_after = Pt(0)
                cp.alignment = WD_ALIGN_PARAGRAPH.LEFT
                
                code_text = "\n".join(code_block_lines)
                c_run = cp.add_run(code_text)
                c_run.font.name = "Consolas"
                c_run.font.size = Pt(9.5)
                c_run.font.color.rgb = RGBColor(30, 41, 59)
                
                # Add spacing after table
                sp = doc.add_paragraph()
                sp.paragraph_format.space_before = Pt(0)
                sp.paragraph_format.space_after = Pt(4)
                
            i += 1
            continue

        if in_code_block:
            code_block_lines.append(line)
            i += 1
            continue

        # Check for Markdown Table
        if line.strip().startswith('|') and line.strip().endswith('|'):
            # It's a table row
            # Collect all table rows
            table_lines = [line]
            while i + 1 < total_lines and lines[i+1].strip().startswith('|') and lines[i+1].strip().endswith('|'):
                i += 1
                table_lines.append(lines[i].rstrip('\r\n'))
            
            # Parse table lines
            parsed_rows = []
            for tl in table_lines:
                cells = [c.strip() for c in tl.strip().split('|')[1:-1]]
                if cells and all(re.match(r'^:?-+:?$', c) for c in cells):
                    # Separator line, skip
                    continue
                parsed_rows.append(cells)
            
            if parsed_rows:
                num_cols = max(len(r) for r in parsed_rows)
                num_rows = len(parsed_rows)
                tbl = doc.add_table(rows=num_rows, cols=num_cols)
                tbl.alignment = WD_TABLE_ALIGNMENT.CENTER
                
                for r_idx, row_data in enumerate(parsed_rows):
                    is_header = (r_idx == 0)
                    for c_idx in range(num_cols):
                        val = row_data[c_idx] if c_idx < len(row_data) else ""
                        c = tbl.cell(r_idx, c_idx)
                        set_cell_margins(c, top=100, bottom=100, left=140, right=140)
                        
                        if is_header:
                            set_cell_background(c, "E2E8F0")
                            set_cell_border(c, top="single", top_sz="6", top_color="475569",
                                            bottom="single", bottom_sz="6", bottom_color="475569",
                                            left="single", left_sz="4", left_color="CBD5E1",
                                            right="single", right_sz="4", right_color="CBD5E1")
                        else:
                            bg = "F8FAFC" if r_idx % 2 == 1 else "FFFFFF"
                            set_cell_background(c, bg)
                            set_cell_border(c, top="single", top_sz="4", top_color="E2E8F0",
                                            bottom="single", bottom_sz="4", bottom_color="E2E8F0",
                                            left="single", left_sz="4", left_color="E2E8F0",
                                            right="single", right_sz="4", right_color="E2E8F0")
                        
                        p = c.paragraphs[0]
                        p.paragraph_format.line_spacing = 1.15
                        p.paragraph_format.space_before = Pt(2)
                        p.paragraph_format.space_after = Pt(2)
                        p.alignment = WD_ALIGN_PARAGRAPH.CENTER if is_header else WD_ALIGN_PARAGRAPH.LEFT
                        apply_text_formatting(p, val, base_font_size=10, is_bold_base=is_header)
                
                # Add spacing after table
                sp = doc.add_paragraph()
                sp.paragraph_format.space_before = Pt(0)
                sp.paragraph_format.space_after = Pt(6)
            
            i += 1
            continue

        # Page break markers
        if line.strip() == '\\newpage' or line.strip() == '---':
            if i > 5 and i < total_lines - 10:
                doc.add_page_break()
            i += 1
            continue

        # Check Headings
        if line.startswith('# '):
            title_text = line[2:].strip()
            p = doc.add_paragraph()
            p.alignment = WD_ALIGN_PARAGRAPH.CENTER
            p.paragraph_format.space_before = Pt(14)
            p.paragraph_format.space_after = Pt(12)
            p.paragraph_format.line_spacing = 1.15
            run = p.add_run(title_text)
            run.font.name = "Times New Roman"
            run.font.size = Pt(14)
            run.font.bold = True
            run.font.color.rgb = RGBColor(0, 0, 0)
            i += 1
            continue

        if line.startswith('## '):
            h2_text = line[3:].strip()
            p = doc.add_paragraph()
            p.paragraph_format.space_before = Pt(12)
            p.paragraph_format.space_after = Pt(6)
            p.paragraph_format.line_spacing = 1.3
            if h2_text.startswith("BERBASIS WEBMOBILE"):
                # Subtitle in cover
                p.alignment = WD_ALIGN_PARAGRAPH.CENTER
                run = p.add_run(h2_text)
                run.font.name = "Times New Roman"
                run.font.size = Pt(13)
                run.font.bold = True
            else:
                p.alignment = WD_ALIGN_PARAGRAPH.LEFT
                apply_text_formatting(p, h2_text, base_font_size=12, is_bold_base=True)
            i += 1
            continue

        if line.startswith('### '):
            h3_text = line[4:].strip()
            p = doc.add_paragraph()
            p.paragraph_format.space_before = Pt(10)
            p.paragraph_format.space_after = Pt(4)
            p.paragraph_format.line_spacing = 1.3
            p.alignment = WD_ALIGN_PARAGRAPH.LEFT
            apply_text_formatting(p, h3_text, base_font_size=12, is_bold_base=True)
            i += 1
            continue

        if line.startswith('#### '):
            h4_text = line[5:].strip()
            p = doc.add_paragraph()
            p.paragraph_format.space_before = Pt(8)
            p.paragraph_format.space_after = Pt(3)
            p.paragraph_format.line_spacing = 1.3
            p.alignment = WD_ALIGN_PARAGRAPH.LEFT
            apply_text_formatting(p, h4_text, base_font_size=12, is_bold_base=True, is_italic_base=True)
            i += 1
            continue

        # Blank lines
        if not line.strip() or line.strip() == '<br>' or line.strip() == '<br><br>':
            # Don't add multiple empty paragraphs
            i += 1
            continue

        # Blockquote / Alert callout
        if line.strip().startswith('>'):
            callout_text = line.strip()[1:].strip()
            tbl = doc.add_table(rows=1, cols=1)
            tbl.alignment = WD_TABLE_ALIGNMENT.CENTER
            c = tbl.cell(0, 0)
            set_cell_background(c, "EFF6FF")
            set_cell_border(c, top="none", bottom="none", right="none", left="single", left_sz="18", left_color="2563EB")
            set_cell_margins(c, top=80, bottom=80, left=150, right=150)
            p = c.paragraphs[0]
            p.paragraph_format.line_spacing = 1.2
            p.paragraph_format.space_before = Pt(2)
            p.paragraph_format.space_after = Pt(2)
            apply_text_formatting(p, callout_text, base_font_size=11, is_italic_base=True)
            sp = doc.add_paragraph()
            sp.paragraph_format.space_before = Pt(0)
            sp.paragraph_format.space_after = Pt(4)
            i += 1
            continue

        # Bullet list item
        if re.match(r'^\s*[-*]\s+(.*)', line):
            m = re.match(r'^\s*[-*]\s+(.*)', line)
            list_text = m.group(1)
            indent_level = len(re.match(r'^\s*', line).group(0)) // 2
            p = doc.add_paragraph()
            p.paragraph_format.left_indent = Inches(0.25 * (indent_level + 1))
            p.paragraph_format.space_before = Pt(1)
            p.paragraph_format.space_after = Pt(2)
            p.paragraph_format.line_spacing = 1.3
            bullet_symbol = "• " if indent_level == 0 else "– "
            run_b = p.add_run(bullet_symbol)
            run_b.font.name = "Times New Roman"
            run_b.font.bold = True
            apply_text_formatting(p, list_text, base_font_size=12)
            i += 1
            continue

        # Numbered list item
        if re.match(r'^\s*(\d+\.|\w\)|[ivxlcdm]+\))\s+(.*)', line):
            m = re.match(r'^\s*(\d+\.|\w\)|[ivxlcdm]+\))\s+(.*)', line)
            num_prefix = m.group(1)
            list_text = m.group(2)
            indent_level = len(re.match(r'^\s*', line).group(0)) // 2
            p = doc.add_paragraph()
            p.paragraph_format.left_indent = Inches(0.25 * (indent_level + 1))
            p.paragraph_format.space_before = Pt(2)
            p.paragraph_format.space_after = Pt(3)
            p.paragraph_format.line_spacing = 1.3
            run_n = p.add_run(num_prefix + " ")
            run_n.font.name = "Times New Roman"
            run_n.font.bold = True
            apply_text_formatting(p, list_text, base_font_size=12)
            i += 1
            continue

        # Standard paragraph
        p = doc.add_paragraph()
        p.paragraph_format.line_spacing = 1.5
        p.paragraph_format.space_before = Pt(0)
        p.paragraph_format.space_after = Pt(6)
        
        # Center metadata in cover
        if i < 40 and ("MAKASSAR" in line or "NOVEMBER 2026" in line or "IDENTITAS" in line or "DOSEN" in line):
            if "MAKASSAR" in line or "NOVEMBER 2026" in line:
                p.alignment = WD_ALIGN_PARAGRAPH.CENTER
            else:
                p.alignment = WD_ALIGN_PARAGRAPH.LEFT
        else:
            p.alignment = WD_ALIGN_PARAGRAPH.JUSTIFY
            
        apply_text_formatting(p, line.strip(), base_font_size=12)
        i += 1

    # Add page numbers to all sections
    for sec in doc.sections:
        add_page_number_to_section(sec)

    try:
        doc.save(docx_path)
        print(f"DOCX successfully generated at: {docx_path}")
    except PermissionError:
        alt_path = docx_path.replace(".docx", "_MDLC.docx")
        doc.save(alt_path)
        print(f"Peringatan: Berkas {docx_path} sedang dibuka oleh Microsoft Word.")
        print(f"DOCX berhasil disimpan pada nama berkas alternatif: {alt_path}")

if __name__ == "__main__":
    md_file = r"d:\MULPED\LAPORAN_PENGEMBANGAN_MULTIMEDIA.md"
    out_docx = r"d:\MULPED\Laporan_Pengembangan_Multimedia.docx"
    build_docx(md_file, out_docx)

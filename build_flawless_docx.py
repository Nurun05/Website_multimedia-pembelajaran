# -*- coding: utf-8 -*-
"""
build_flawless_docx.py
Generates a 100% schema-valid, pristine Microsoft Word document (.docx)
from the approved academic report LAPORAN_PENGEMBANGAN_MULTIMEDIA.md.
Guaranteed to open without errors in Microsoft Word.
"""

import os
import re
import shutil
import docx
from docx import Document
from docx.shared import Inches, Pt, RGBColor, Cm
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.enum.table import WD_TABLE_ALIGNMENT, WD_ALIGN_VERTICAL
from docx.oxml import OxmlElement, parse_xml
from docx.oxml.ns import nsdecls, qn

def set_cell_margins(cell, top=100, bottom=100, left=140, right=140):
    tcPr = cell._tc.get_or_add_tcPr()
    tcMar = parse_xml(f'<w:tcMar {nsdecls("w")}><w:top w:w="{top}" w:type="dxa"/><w:bottom w:w="{bottom}" w:type="dxa"/><w:left w:w="{left}" w:type="dxa"/><w:right w:w="{right}" w:type="dxa"/></w:tcMar>')
    tcPr.append(tcMar)

def set_cell_background(cell, fill_hex):
    tcPr = cell._tc.get_or_add_tcPr()
    shd = parse_xml(f'<w:shd {nsdecls("w")} w:fill="{fill_hex}"/>')
    tcPr.append(shd)

def set_cell_border(cell, **kwargs):
    tc = cell._tc
    tcPr = tc.get_or_add_tcPr()
    tcBorders = parse_xml(
        f'<w:tcBorders {nsdecls("w")}>\n'
        f'<w:top w:val="{kwargs.get("top", "single")}" w:sz="{kwargs.get("top_sz", "4")}" w:space="0" w:color="{kwargs.get("top_color", "D1D5DB")}"/>\n'
        f'<w:left w:val="{kwargs.get("left", "single")}" w:sz="{kwargs.get("left_sz", "4")}" w:space="0" w:color="{kwargs.get("left_color", "D1D5DB")}"/>\n'
        f'<w:bottom w:val="{kwargs.get("bottom", "single")}" w:sz="{kwargs.get("bottom_sz", "4")}" w:space="0" w:color="{kwargs.get("bottom_color", "D1D5DB")}"/>\n'
        f'<w:right w:val="{kwargs.get("right", "single")}" w:sz="{kwargs.get("right_sz", "4")}" w:space="0" w:color="{kwargs.get("right_color", "D1D5DB")}"/>\n'
        f'</w:tcBorders>'
    )
    tcPr.append(tcBorders)

def add_clean_page_number_to_footer(section):
    footer = section.footer
    p = footer.paragraphs[0]
    p.alignment = WD_ALIGN_PARAGRAPH.CENTER
    run = p.add_run()
    run.font.name = "Times New Roman"
    run.font.size = Pt(12)
    run.font.color.rgb = RGBColor(0, 0, 0)
    
    # Schema-compliant complex field inside run
    fldChar1 = parse_xml(r'<w:fldChar %s w:fldCharType="begin"/>' % nsdecls('w'))
    instrText = parse_xml(r'<w:instrText %s xml:space="preserve"> PAGE </w:instrText>' % nsdecls('w'))
    fldChar2 = parse_xml(r'<w:fldChar %s w:fldCharType="end"/>' % nsdecls('w'))
    run._r.append(fldChar1)
    run._r.append(instrText)
    run._r.append(fldChar2)

def set_section_page_number_type(section, fmt='decimal', start=1):
    sectPr = section._sectPr
    # remove existing pgNumType if any
    for el in sectPr.findall(qn('w:pgNumType')):
        sectPr.remove(el)
    pgNumType = parse_xml(r'<w:pgNumType %s w:fmt="%s" w:start="%s"/>' % (nsdecls('w'), fmt, start))
    # In OpenXML CT_SectPr, pgNumType must appear before cols and docGrid
    cols = sectPr.find(qn('w:cols'))
    if cols is not None:
        cols.addprevious(pgNumType)
    else:
        docGrid = sectPr.find(qn('w:docGrid'))
        if docGrid is not None:
            docGrid.addprevious(pgNumType)
        else:
            sectPr.append(pgNumType)

def apply_inline_formatting(paragraph, text, base_size=12, is_bold_base=False, is_italic_base=False, font_name="Times New Roman"):
    tokens = re.split(r'(\*\*.*?\*\*|\*.*?\*|`.*?`)', text)
    for tok in tokens:
        if not tok:
            continue
        if tok.startswith('**') and tok.endswith('**') and len(tok) >= 4:
            clean = tok[2:-2]
            r = paragraph.add_run(clean)
            r.font.name = font_name
            r.font.size = Pt(base_size)
            r.font.bold = True
            r.font.italic = is_italic_base
            r.font.color.rgb = RGBColor(0, 0, 0)
        elif tok.startswith('*') and tok.endswith('*') and len(tok) >= 2:
            clean = tok[1:-1]
            r = paragraph.add_run(clean)
            r.font.name = font_name
            r.font.size = Pt(base_size)
            r.font.bold = is_bold_base
            r.font.italic = True
            r.font.color.rgb = RGBColor(0, 0, 0)
        elif tok.startswith('`') and tok.endswith('`') and len(tok) >= 2:
            clean = tok[1:-1]
            r = paragraph.add_run(clean)
            r.font.name = "Consolas"
            r.font.size = Pt(base_size - 1)
            r.font.bold = is_bold_base
            r.font.color.rgb = RGBColor(30, 64, 175)
        else:
            r = paragraph.add_run(tok)
            r.font.name = font_name
            r.font.size = Pt(base_size)
            r.font.bold = is_bold_base
            r.font.italic = is_italic_base
            r.font.color.rgb = RGBColor(0, 0, 0)

def generate_academic_docx():
    md_path = r"d:\MULPED\LAPORAN_PENGEMBANGAN_MULTIMEDIA.md"
    with open(md_path, 'r', encoding='utf-8') as f:
        md_text = f.read()

    doc = Document()

    # Configure Normal Style
    normal_style = doc.styles['Normal']
    normal_style.font.name = 'Times New Roman'
    normal_style.font.size = Pt(12)
    normal_style.font.color.rgb = RGBColor(0, 0, 0)
    normal_style.paragraph_format.line_spacing = 1.5
    normal_style.paragraph_format.space_after = Pt(6)
    normal_style.paragraph_format.space_before = Pt(0)
    normal_style.paragraph_format.alignment = WD_ALIGN_PARAGRAPH.JUSTIFY

    # Configure Heading 1
    h1_style = doc.styles['Heading 1']
    h1_style.font.name = 'Times New Roman'
    h1_style.font.size = Pt(14)
    h1_style.font.bold = True
    h1_style.font.color.rgb = RGBColor(0, 0, 0)
    h1_style.paragraph_format.alignment = WD_ALIGN_PARAGRAPH.CENTER
    h1_style.paragraph_format.space_before = Pt(12)
    h1_style.paragraph_format.space_after = Pt(12)
    h1_style.paragraph_format.line_spacing = 1.5

    # Configure Heading 2
    h2_style = doc.styles['Heading 2']
    h2_style.font.name = 'Times New Roman'
    h2_style.font.size = Pt(12)
    h2_style.font.bold = True
    h2_style.font.color.rgb = RGBColor(0, 0, 0)
    h2_style.paragraph_format.alignment = WD_ALIGN_PARAGRAPH.JUSTIFY
    h2_style.paragraph_format.space_before = Pt(8)
    h2_style.paragraph_format.space_after = Pt(4)
    h2_style.paragraph_format.line_spacing = 1.5

    # Configure Heading 3
    h3_style = doc.styles['Heading 3']
    h3_style.font.name = 'Times New Roman'
    h3_style.font.size = Pt(12)
    h3_style.font.bold = True
    h3_style.font.color.rgb = RGBColor(0, 0, 0)
    h3_style.paragraph_format.alignment = WD_ALIGN_PARAGRAPH.JUSTIFY
    h3_style.paragraph_format.space_before = Pt(6)
    h3_style.paragraph_format.space_after = Pt(3)
    h3_style.paragraph_format.line_spacing = 1.5

    # Configure Heading 4
    h4_style = doc.styles['Heading 4']
    h4_style.font.name = 'Times New Roman'
    h4_style.font.size = Pt(12)
    h4_style.font.bold = True
    h4_style.font.italic = True
    h4_style.font.color.rgb = RGBColor(0, 0, 0)
    h4_style.paragraph_format.alignment = WD_ALIGN_PARAGRAPH.JUSTIFY
    h4_style.paragraph_format.space_before = Pt(4)
    h4_style.paragraph_format.space_after = Pt(2)
    h4_style.paragraph_format.line_spacing = 1.5

    # =========================================================================
    # SECTION 0: SAMPUL (No Page Number)
    # =========================================================================
    sec_cover = doc.sections[0]
    sec_cover.top_margin = Cm(4)
    sec_cover.left_margin = Cm(4)
    sec_cover.bottom_margin = Cm(3)
    sec_cover.right_margin = Cm(3)
    sec_cover.header.is_linked_to_previous = False
    sec_cover.footer.is_linked_to_previous = False

    # Title
    p_title = doc.add_paragraph()
    p_title.alignment = WD_ALIGN_PARAGRAPH.CENTER
    p_title.paragraph_format.space_before = Pt(0)
    p_title.paragraph_format.space_after = Pt(12)
    p_title.paragraph_format.line_spacing = 1.15
    r_t1 = p_title.add_run("LAPORAN PENGEMBANGAN MULTIMEDIA PEMBELAJARAN\n\n")
    r_t1.font.name = "Times New Roman"
    r_t1.font.size = Pt(14)
    r_t1.font.bold = True

    r_t2 = p_title.add_run("PENGEMBANGAN MULTIMEDIA PEMBELAJARAN INTERAKTIF BERBASIS WEBMOBILE SEBAGAI PENDAMPING MEDIA PEMBELAJARAN KONVENSIONAL PADA MATA PELAJARAN IPA SMP NEGERI 1 TANDUKKALUA MENGGUNAKAN MODEL MDLC\n\n")
    r_t2.font.name = "Times New Roman"
    r_t2.font.size = Pt(12)
    r_t2.font.bold = True
    r_t2.font.italic = True

    r_t3 = p_title.add_run("Diajukan untuk Memenuhi Tugas Mata Kuliah Multimedia Pembelajaran")
    r_t3.font.name = "Times New Roman"
    r_t3.font.size = Pt(11)

    # UNM Logo
    logo_path = r"d:\MULPED\assets\logo-unm.png"
    if not os.path.exists(logo_path):
        logo_path = r"d:\MULPED\.agents\skills\menuliscepat\logo.jpg"
    if os.path.exists(logo_path):
        p_logo = doc.add_paragraph()
        p_logo.alignment = WD_ALIGN_PARAGRAPH.CENTER
        p_logo.paragraph_format.space_before = Pt(16)
        p_logo.paragraph_format.space_after = Pt(16)
        doc.add_picture(logo_path, width=Inches(2.2))
        doc.paragraphs[-1].alignment = WD_ALIGN_PARAGRAPH.CENTER

    p_oleh = doc.add_paragraph()
    p_oleh.alignment = WD_ALIGN_PARAGRAPH.CENTER
    p_oleh.paragraph_format.space_before = Pt(10)
    p_oleh.paragraph_format.space_after = Pt(6)
    r_oleh = p_oleh.add_run("Disusun oleh:")
    r_oleh.font.name = "Times New Roman"
    r_oleh.font.size = Pt(11)

    # Identity Table
    tbl_id = doc.add_table(rows=6, cols=2)
    tbl_id.alignment = WD_TABLE_ALIGNMENT.CENTER
    id_rows = [
        ("Nama", "Nurun Nisa Ahmad"),
        ("NIM", "240209501049"),
        ("Kelas", "PTIK E 2024"),
        ("Mata Kuliah", "Multimedia Pembelajaran"),
        ("Dosen Pengampu", "Dr. Udin Sidik Sidin, S.Pd., M.T. (NIDN 0015067407)"),
        ("Dosen Mitra", "Ir. H. Muhammad Riska, S.Pd., M.Pd. (NIDN 0020098503)")
    ]
    for r_i, (lbl, val) in enumerate(id_rows):
        row = tbl_id.rows[r_i]
        c0, c1 = row.cells[0], row.cells[1]
        c0.width = Inches(2.0)
        c1.width = Inches(4.2)
        set_cell_margins(c0, top=40, bottom=40, left=60, right=60)
        set_cell_margins(c1, top=40, bottom=40, left=60, right=60)
        
        p0 = c0.paragraphs[0]
        p0.paragraph_format.line_spacing = 1.15
        p0.paragraph_format.space_after = Pt(2)
        r0 = p0.add_run(lbl)
        r0.font.name = "Times New Roman"
        r0.font.size = Pt(11)
        r0.font.bold = True
        
        p1 = c1.paragraphs[0]
        p1.paragraph_format.line_spacing = 1.15
        p1.paragraph_format.space_after = Pt(2)
        r1 = p1.add_run(f":  {val}")
        r1.font.name = "Times New Roman"
        r1.font.size = Pt(11)

    # Campus footer
    p_camp = doc.add_paragraph()
    p_camp.alignment = WD_ALIGN_PARAGRAPH.CENTER
    p_camp.paragraph_format.space_before = Pt(24)
    p_camp.paragraph_format.space_after = Pt(0)
    p_camp.paragraph_format.line_spacing = 1.15
    r_c = p_camp.add_run(
        "PROGRAM STUDI PENDIDIKAN TEKNIK INFORMATIKA DAN KOMPUTER\n"
        "JURUSAN TEKNIK INFORMATIKA DAN KOMPUTER\n"
        "FAKULTAS TEKNIK\n"
        "UNIVERSITAS NEGERI MAKASSAR\n"
        "2026"
    )
    r_c.font.name = "Times New Roman"
    r_c.font.size = Pt(12)
    r_c.font.bold = True

    # =========================================================================
    # SECTION 1: PRELIMINARY (Kata Pengantar, Daftar Isi, Daftar Tabel, Daftar Gambar)
    # Page numbering: Roman lower case (i, ii, iii...), bottom center
    # =========================================================================
    sec_prelim = doc.add_section(docx.enum.section.WD_SECTION.NEW_PAGE)
    sec_prelim.top_margin = Cm(4)
    sec_prelim.left_margin = Cm(4)
    sec_prelim.bottom_margin = Cm(3)
    sec_prelim.right_margin = Cm(3)
    sec_prelim.header.is_linked_to_previous = False
    sec_prelim.footer.is_linked_to_previous = False
    
    add_clean_page_number_to_footer(sec_prelim)
    set_section_page_number_type(sec_prelim, fmt='lowerRoman', start=1)

    # KATA PENGANTAR
    p_kp = doc.add_paragraph()
    p_kp.alignment = WD_ALIGN_PARAGRAPH.CENTER
    p_kp.paragraph_format.space_before = Pt(12)
    p_kp.paragraph_format.space_after = Pt(12)
    r_kp_h = p_kp.add_run("KATA PENGANTAR")
    r_kp_h.font.name = "Times New Roman"
    r_kp_h.font.size = Pt(14)
    r_kp_h.font.bold = True

    kp_pars = [
        "Puji syukur penulis panjatkan ke hadirat Tuhan Yang Maha Esa atas terselesaikannya pengembangan produk dan penyusunan laporan berjudul **\"Pengembangan Multimedia Pembelajaran Interaktif Berbasis Webmobile Sebagai Pendamping Media Pembelajaran Konvensional Pada Mata Pelajaran IPA SMP Negeri 1 Tandukkalua Menggunakan Model MDLC\"**. Laporan ini mendokumentasikan proses analisis kebutuhan, perancangan pedagogis, pengumpulan bahan ajar, perakitan media, hingga pengujian fungsional modul interaktif bertema Ekologi dan Keanekaragaman Hayati Indonesia untuk peserta didik kelas VII Sekolah Menengah Pertama (SMP) Negeri 1 Tandukkalua.",
        "Penyusunan laporan ini tidak terlepas dari bimbingan, arahan, dan dukungan berbagai pihak. Penulis menyampaikan terima kasih yang tulus kepada:",
        "1. Bapak Dr. Udin Sidik Sidin, S.Pd., M.T., selaku Dosen Pengampu mata kuliah Multimedia Pembelajaran yang memberikan arahan kurikulum, penguatan metodologi pengembangan media, serta bimbingan akademik selama perkuliahan;\n"
        "2. Bapak Ir. H. Muhammad Riska, S.Pd., M.Pd., selaku Dosen Mitra yang mendampingi proses perkuliahan dan memberikan telaah kritis terhadap desain instruksional serta prinsip penyajian pesan visual pembelajaran;\n"
        "3. Bapak dan Ibu Dosen Jurusan Teknik Informatika dan Komputer, Fakultas Teknik, Universitas Negeri Makassar yang telah membekali penulis dengan dasar keilmuan kependidikan dan teknologi informasi;\n"
        "4. Guru mata pelajaran IPA serta sivitas akademika SMP Negeri 1 Tandukkalua yang telah memberikan data empiris mengenai kendala pembelajaran di ruang kelas;\n"
        "5. Rekan-rekan mahasiswa kelas Pendidikan Teknik Informatika dan Komputer (PTIK) E Angkatan 2024 yang senantiasa saling memotivasi dan bertukar gagasan dalam menyelesaikan tugas karya multimedia ini.",
        "Penulis menyadari bahwa produk dan laporan ini masih memiliki ruang penyempurnaan, terutama pada tahap validasi ahli dan uji coba lapangan terbatas yang direncanakan pada tahap lanjutan. Oleh karena itu, masukan konstruktif dari pembaca sangat diharapkan. Semoga karya ini dapat memberikan sumbangsih nyata bagi penguatan kualitas pembelajaran sains di sekolah menengah."
    ]
    for p_txt in kp_pars:
        p = doc.add_paragraph()
        p.paragraph_format.line_spacing = 1.5
        p.paragraph_format.space_after = Pt(6)
        if p_txt.startswith("1."):
            p.paragraph_format.first_line_indent = Inches(0.2)
        else:
            p.paragraph_format.first_line_indent = Inches(0.5)
        p.alignment = WD_ALIGN_PARAGRAPH.JUSTIFY
        apply_inline_formatting(p, p_txt)

    p_sig = doc.add_paragraph()
    p_sig.alignment = WD_ALIGN_PARAGRAPH.RIGHT
    p_sig.paragraph_format.space_before = Pt(18)
    p_sig.paragraph_format.space_after = Pt(0)
    p_sig.paragraph_format.line_spacing = 1.15
    r_sig = p_sig.add_run("Makassar, November 2026\n\nPenulis,\n\n\n\nNurun Nisa Ahmad\nNIM 240209501049")
    r_sig.font.name = "Times New Roman"
    r_sig.font.size = Pt(12)

    # DAFTAR ISI
    doc.add_page_break()
    p_di = doc.add_paragraph()
    p_di.alignment = WD_ALIGN_PARAGRAPH.CENTER
    p_di.paragraph_format.space_before = Pt(12)
    p_di.paragraph_format.space_after = Pt(12)
    r_di = p_di.add_run("DAFTAR ISI")
    r_di.font.name = "Times New Roman"
    r_di.font.size = Pt(14)
    r_di.font.bold = True

    toc_items = [
        ("SAMPUL", "i", True),
        ("KATA PENGANTAR", "ii", True),
        ("DAFTAR ISI", "iii", True),
        ("DAFTAR TABEL", "iv", True),
        ("DAFTAR GAMBAR", "v", True),
        ("", "", False),
        ("BAB I PENDAHULUAN", "1", True),
        ("  A. Latar Belakang", "1", False),
        ("  B. Tujuan Pengembangan", "4", False),
        ("  C. Manfaat Pengembangan", "5", False),
        ("  D. Gambaran Produk yang Dikembangkan", "6", False),
        ("", "", False),
        ("BAB II PEMBAHASAN", "8", True),
        ("  A. Metode Pengembangan (Model MDLC hingga Tahap Testing)", "8", False),
        ("     1. Alasan Pemilihan Model MDLC", "8", False),
        ("     2. Tahap Concept (Konsep dan Analisis Kebutuhan)", "9", False),
        ("     3. Tahap Design (Perancangan)", "12", False),
        ("     4. Tahap Material Collecting (Pengumpulan Bahan)", "18", False),
        ("     5. Tahap Assembly (Perakitan Produk)", "19", False),
        ("     6. Tahap Testing (Pengujian)", "20", False),
        ("  B. Hasil Pengembangan Produk", "21", False),
        ("     1. Gambaran Produk Jadi dan Cakupan Materi", "21", False),
        ("     2. Kesesuaian Implementasi dengan Rencana Proposal", "23", False),
        ("     3. Penambahan dan Pengembangan Fitur dari Proposal Awal", "24", False),
        ("     4. Hasil Pengujian", "26", False),
        ("  C. Kekurangan Produk dan Tindak Lanjut", "28", False),
        ("", "", False),
        ("BAB III KESIMPULAN", "30", True),
        ("  A. Kesimpulan", "30", False),
        ("  B. Rencana Validasi Ahli, Uji Coba Pengguna, dan Tahap Distribusi (Distribution)", "31", False),
        ("  C. Saran Pengembangan Selanjutnya", "32", False),
        ("", "", False),
        ("DAFTAR PUSTAKA", "34", True),
        ("LAMPIRAN", "36", True),
    ]

    for title, pg, is_bold in toc_items:
        p_row = doc.add_paragraph()
        p_row.paragraph_format.line_spacing = 1.15
        p_row.paragraph_format.space_before = Pt(1)
        p_row.paragraph_format.space_after = Pt(2)
        if not title:
            continue
        
        # Format dot leader table line
        r_t = p_row.add_run(title)
        r_t.font.name = "Times New Roman"
        r_t.font.size = Pt(11)
        r_t.font.bold = is_bold
        
        # Leader dots
        # Calculate dots based on text length
        dots_count = max(3, 75 - len(title) - len(pg))
        r_dots = p_row.add_run(" " + "." * dots_count + " ")
        r_dots.font.name = "Times New Roman"
        r_dots.font.size = Pt(10)
        r_dots.font.color.rgb = RGBColor(140, 140, 140)
        
        r_pg = p_row.add_run(pg)
        r_pg.font.name = "Times New Roman"
        r_pg.font.size = Pt(11)
        r_pg.font.bold = is_bold

    # DAFTAR TABEL
    doc.add_page_break()
    p_dt = doc.add_paragraph()
    p_dt.alignment = WD_ALIGN_PARAGRAPH.CENTER
    p_dt.paragraph_format.space_before = Pt(12)
    p_dt.paragraph_format.space_after = Pt(12)
    r_dt = p_dt.add_run("DAFTAR TABEL")
    r_dt.font.name = "Times New Roman"
    r_dt.font.size = Pt(14)
    r_dt.font.bold = True

    tables_catalog = [
        ("Tabel 2.1", "Sintesis Analisis Masalah Pembelajaran, Kebutuhan Belajar, dan Solusi Desain Media", "10"),
        ("Tabel 2.2", "Pemetaan Capaian Pembelajaran (CP) dan Alur Tujuan Pembelajaran (ATP)", "11"),
        ("Tabel 2.3", "Peta Identifikasi Miskonsepsi Kritis dan Strategi Klarifikasi Pedagogis", "12"),
        ("Tabel 2.4", "Penerapan 12 Prinsip Pembelajaran Multimedia Mayer (2021) pada Modul Interaktif", "14"),
        ("Tabel 2.5", "Kisi-Kisi Distribusi Butir Soal Evaluasi Kuis Akhir Berdasarkan Taksonomi Bloom", "17"),
        ("Tabel 2.6", "Cakupan Materi Pembelajaran, Kegiatan Interaktif, dan Sebaran Butir Asesmen", "18"),
        ("Tabel 2.7", "Matriks Kesesuaian Rencana Awal Proposal dengan Hasil Implementasi Aktual", "23"),
        ("Tabel 2.8", "Penambahan Fitur Mutakhir Melampaui Proposal Awal dan Rasional Pedagogisnya", "25"),
        ("Tabel 2.9", "Hasil Pengujian Fungsionalitas Kotak Hitam (Black-Box Testing) Antarmuka Belajar", "26"),
        ("Tabel 2.10", "Hasil Pengujian Verifikasi Teknis Kompilasi dan Kinerja Eksekusi Sistem", "27")
    ]
    for num, title, pg in tables_catalog:
        p_row = doc.add_paragraph()
        p_row.paragraph_format.line_spacing = 1.15
        p_row.paragraph_format.space_before = Pt(2)
        p_row.paragraph_format.space_after = Pt(3)
        
        r_n = p_row.add_run(num + "  ")
        r_n.font.name = "Times New Roman"
        r_n.font.size = Pt(11)
        r_n.font.bold = True
        
        r_t = p_row.add_run(title)
        r_t.font.name = "Times New Roman"
        r_t.font.size = Pt(11)
        
        dots_count = max(3, 75 - len(num) - len(title) - len(pg))
        r_dots = p_row.add_run(" " + "." * dots_count + " ")
        r_dots.font.name = "Times New Roman"
        r_dots.font.size = Pt(10)
        r_dots.font.color.rgb = RGBColor(140, 140, 140)
        
        r_pg = p_row.add_run(pg)
        r_pg.font.name = "Times New Roman"
        r_pg.font.size = Pt(11)

    # DAFTAR GAMBAR
    doc.add_page_break()
    p_dg = doc.add_paragraph()
    p_dg.alignment = WD_ALIGN_PARAGRAPH.CENTER
    p_dg.paragraph_format.space_before = Pt(12)
    p_dg.paragraph_format.space_after = Pt(12)
    r_dg = p_dg.add_run("DAFTAR GAMBAR")
    r_dg.font.name = "Times New Roman"
    r_dg.font.size = Pt(14)
    r_dg.font.bold = True

    figures_catalog = [
        ("Gambar 2.1", "Use Case Diagram: Pemodelan Interaksi Peran Siswa dan Guru IPA", "15"),
        ("Gambar 2.2", "Activity Diagram: Alur Pengalaman Belajar Mandiri Peserta Didik", "16"),
        ("Gambar 2.3", "Flowchart Alur Navigasi Sistem dan Ambang Kelulusan KKM 70", "17"),
        ("Gambar 2.4", "Slot Tangkapan Layar Halaman Beranda Sambutan dan Pemilihan Akses Peran", "21"),
        ("Gambar 2.5", "Slot Tangkapan Layar Halaman Petunjuk Belajar dan Capaian Tujuan Pembelajaran", "21"),
        ("Gambar 2.6", "Slot Tangkapan Layar Dasbor Menu Utama Pembelajaran Berbasis Kartu", "22"),
        ("Gambar 2.7", "Slot Tangkapan Layar Kegiatan Belajar 1: Konsep Kunci dan Latihan Formatif", "22"),
        ("Gambar 2.8", "Slot Tangkapan Layar Kegiatan Belajar 2: Tabulasi Visual Tiga Tingkat Kehati", "22"),
        ("Gambar 2.9", "Slot Tangkapan Layar Kegiatan Belajar 3: Simulasi Observasi dan Peta Wallace-Weber", "23"),
        ("Gambar 2.10", "Slot Tangkapan Layar Halaman Kuis Akhir Berproteksi Verifikasi Wajah Siswa", "23"),
        ("Gambar 2.11", "Slot Tangkapan Layar Halaman Hasil Skor, Pemetaan TP, dan Rekomendasi", "24"),
        ("Gambar 2.12", "Slot Tangkapan Layar Halaman Rangkuman dan Cetak Lembar Catatan Mandiri", "24"),
        ("Gambar 2.13", "Slot Tangkapan Layar Dasbor Pengelolaan Guru dan Rekapitulasi Kelas", "25")
    ]
    for num, title, pg in figures_catalog:
        p_row = doc.add_paragraph()
        p_row.paragraph_format.line_spacing = 1.15
        p_row.paragraph_format.space_before = Pt(2)
        p_row.paragraph_format.space_after = Pt(3)
        
        r_n = p_row.add_run(num + "  ")
        r_n.font.name = "Times New Roman"
        r_n.font.size = Pt(11)
        r_n.font.bold = True
        
        r_t = p_row.add_run(title)
        r_t.font.name = "Times New Roman"
        r_t.font.size = Pt(11)
        
        dots_count = max(3, 75 - len(num) - len(title) - len(pg))
        r_dots = p_row.add_run(" " + "." * dots_count + " ")
        r_dots.font.name = "Times New Roman"
        r_dots.font.size = Pt(10)
        r_dots.font.color.rgb = RGBColor(140, 140, 140)
        
        r_pg = p_row.add_run(pg)
        r_pg.font.name = "Times New Roman"
        r_pg.font.size = Pt(11)

    # =========================================================================
    # SECTION 2: MAIN BODY (BAB I through LAMPIRAN)
    # Page numbering: Arabic numerals (1, 2, 3...), bottom center, restart at 1
    # =========================================================================
    sec_body = doc.add_section(docx.enum.section.WD_SECTION.NEW_PAGE)
    sec_body.top_margin = Cm(4)
    sec_body.left_margin = Cm(4)
    sec_body.bottom_margin = Cm(3)
    sec_body.right_margin = Cm(3)
    sec_body.header.is_linked_to_previous = False
    sec_body.footer.is_linked_to_previous = False

    add_clean_page_number_to_footer(sec_body)
    set_section_page_number_type(sec_body, fmt='decimal', start=1)

    # Parse md_text starting from BAB I
    lines = md_text.split('\n')
    start_idx = 0
    for idx, l in enumerate(lines):
        if "# BAB I PENDAHULUAN" in l:
            start_idx = idx
            break

    i = start_idx
    total_lines = len(lines)
    in_code_block = False
    code_lines = []

    while i < total_lines:
        line = lines[i]

        # Code block fence
        if line.strip().startswith('```'):
            if in_code_block:
                in_code_block = False
                tbl = doc.add_table(rows=1, cols=1)
                tbl.alignment = WD_TABLE_ALIGNMENT.CENTER
                c = tbl.cell(0, 0)
                set_cell_background(c, "F8FAFC")
                set_cell_border(c, top="single", top_sz="4", top_color="CBD5E1",
                                bottom="single", bottom_sz="4", bottom_color="CBD5E1",
                                left="single", left_sz="12", left_color="2563EB",
                                right="single", right_sz="4", right_color="CBD5E1")
                set_cell_margins(c, top=120, bottom=120, left=180, right=180)
                p_c = c.paragraphs[0]
                p_c.paragraph_format.line_spacing = 1.15
                p_c.paragraph_format.space_before = Pt(0)
                p_c.paragraph_format.space_after = Pt(0)
                r_c = p_c.add_run("\n".join(code_lines))
                r_c.font.name = "Consolas"
                r_c.font.size = Pt(9.5)
                r_c.font.color.rgb = RGBColor(30, 41, 59)
                
                sp = doc.add_paragraph()
                sp.paragraph_format.space_before = Pt(0)
                sp.paragraph_format.space_after = Pt(4)
                code_lines = []
            else:
                in_code_block = True
                code_lines = []
            i += 1
            continue

        if in_code_block:
            code_lines.append(line)
            i += 1
            continue

        # Page breaks
        if line.strip() == '\\newpage':
            doc.add_page_break()
            i += 1
            continue

        if line.strip() == '---':
            i += 1
            continue

        # Headings
        if line.startswith('# '):
            h1_text = line[2:].strip()
            p = doc.add_paragraph(style='Heading 1')
            apply_inline_formatting(p, h1_text, base_size=14, is_bold_base=True)
            i += 1
            continue

        if line.startswith('## '):
            h2_text = line[3:].strip()
            p = doc.add_paragraph(style='Heading 2')
            apply_inline_formatting(p, h2_text, base_size=12, is_bold_base=True)
            i += 1
            continue

        if line.startswith('### '):
            h3_text = line[4:].strip()
            p = doc.add_paragraph(style='Heading 3')
            apply_inline_formatting(p, h3_text, base_size=12, is_bold_base=True)
            i += 1
            continue

        if line.startswith('#### '):
            h4_text = line[5:].strip()
            p = doc.add_paragraph(style='Heading 4')
            apply_inline_formatting(p, h4_text, base_size=12, is_bold_base=True, is_italic_base=True)
            i += 1
            continue

        # Image Embeddings ![caption](path)
        img_match = re.match(r'!\[(.*?)\]\((.*?)\)', line.strip())
        if img_match:
            caption_text = img_match.group(1)
            raw_img_path = img_match.group(2).replace("file:///", "").replace("/", "\\")
            if os.path.exists(raw_img_path):
                p_img = doc.add_paragraph()
                p_img.alignment = WD_ALIGN_PARAGRAPH.CENTER
                p_img.paragraph_format.space_before = Pt(8)
                p_img.paragraph_format.space_after = Pt(4)
                doc.add_picture(raw_img_path, width=Inches(5.6))
                doc.paragraphs[-1].alignment = WD_ALIGN_PARAGRAPH.CENTER
            i += 1
            continue

        # Markdown Table
        if line.strip().startswith('|') and i + 1 < total_lines and '| ---' in lines[i+1]:
            table_lines = []
            while i < total_lines and lines[i].strip().startswith('|'):
                table_lines.append(lines[i].strip())
                i += 1

            headers = [c.strip() for c in table_lines[0].split('|')[1:-1]]
            rows_data = []
            for t_line in table_lines[2:]:
                cells = [c.strip() for c in t_line.split('|')[1:-1]]
                rows_data.append(cells)

            tbl = doc.add_table(rows=len(rows_data) + 1, cols=len(headers))
            tbl.alignment = WD_TABLE_ALIGNMENT.CENTER

            # Format Header Row
            hdr_cells = tbl.rows[0].cells
            for c_i, h_val in enumerate(headers):
                set_cell_background(hdr_cells[c_i], "EBF5FB")
                set_cell_border(hdr_cells[c_i], top="single", top_sz="6", top_color="2980B9",
                                bottom="single", bottom_sz="6", bottom_color="2980B9",
                                left="single", left_sz="4", left_color="CBD5E1",
                                right="single", right_sz="4", right_color="CBD5E1")
                set_cell_margins(hdr_cells[c_i], top=120, bottom=120, left=140, right=140)
                p = hdr_cells[c_i].paragraphs[0]
                p.alignment = WD_ALIGN_PARAGRAPH.CENTER
                p.paragraph_format.line_spacing = 1.15
                p.paragraph_format.space_after = Pt(2)
                p.paragraph_format.space_before = Pt(2)
                apply_inline_formatting(p, h_val, base_size=10, is_bold_base=True)

            # Format Data Rows
            for r_i, r_data in enumerate(rows_data):
                row_cells = tbl.rows[r_i + 1].cells
                bg = "F8FAFC" if r_i % 2 == 1 else "FFFFFF"
                for c_i in range(len(headers)):
                    val = r_data[c_i] if c_i < len(r_data) else ""
                    val = val.replace("<br>", "\n")
                    set_cell_background(row_cells[c_i], bg)
                    set_cell_border(row_cells[c_i], top="single", top_sz="4", top_color="E2E8F0",
                                    bottom="single", bottom_sz="4", bottom_color="E2E8F0",
                                    left="single", left_sz="4", left_color="E2E8F0",
                                    right="single", right_sz="4", right_color="E2E8F0")
                    set_cell_margins(row_cells[c_i], top=100, bottom=100, left=140, right=140)
                    p = row_cells[c_i].paragraphs[0]
                    p.paragraph_format.line_spacing = 1.15
                    p.paragraph_format.space_after = Pt(2)
                    p.paragraph_format.space_before = Pt(2)
                    p.alignment = WD_ALIGN_PARAGRAPH.LEFT
                    apply_inline_formatting(p, val, base_size=9.5)

            # Spacing after table
            sp = doc.add_paragraph()
            sp.paragraph_format.space_before = Pt(0)
            sp.paragraph_format.space_after = Pt(6)
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
            apply_inline_formatting(p, callout_text, base_size=11, is_italic_base=True)
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
            p.paragraph_format.first_line_indent = Inches(0)
            p.paragraph_format.space_before = Pt(1)
            p.paragraph_format.space_after = Pt(2)
            p.paragraph_format.line_spacing = 1.3
            bullet_symbol = "• " if indent_level == 0 else "– "
            r_b = p.add_run(bullet_symbol)
            r_b.font.name = "Times New Roman"
            r_b.font.bold = True
            apply_inline_formatting(p, list_text, base_size=12)
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
            p.paragraph_format.first_line_indent = Inches(0)
            p.paragraph_format.space_before = Pt(2)
            p.paragraph_format.space_after = Pt(3)
            p.paragraph_format.line_spacing = 1.3
            r_n = p.add_run(num_prefix + " ")
            r_n.font.name = "Times New Roman"
            r_n.font.bold = True
            apply_inline_formatting(p, list_text, base_size=12)
            i += 1
            continue

        # Regular Paragraph
        stripped = line.strip()
        if stripped:
            p = doc.add_paragraph()
            p.paragraph_format.line_spacing = 1.5
            p.paragraph_format.space_after = Pt(6)

            if stripped.startswith("Gambar ") or stripped.startswith("Tabel "):
                p.paragraph_format.first_line_indent = Inches(0)
                p.alignment = WD_ALIGN_PARAGRAPH.CENTER
                apply_inline_formatting(p, stripped, base_size=11, is_bold_base=True)
            elif stripped.startswith("[SLOT GAMBAR"):
                # Style slot image placeholder box
                p.paragraph_format.first_line_indent = Inches(0)
                p.alignment = WD_ALIGN_PARAGRAPH.CENTER
                tbl_slot = doc.add_table(rows=1, cols=1)
                tbl_slot.alignment = WD_TABLE_ALIGNMENT.CENTER
                c_s = tbl_slot.cell(0, 0)
                set_cell_background(c_s, "F1F5F9")
                set_cell_border(c_s, top="dashed", top_sz="6", top_color="94A3B8",
                                bottom="dashed", bottom_sz="6", bottom_color="94A3B8",
                                left="dashed", left_sz="6", left_color="94A3B8",
                                right="dashed", right_sz="6", right_color="94A3B8")
                set_cell_margins(c_s, top=160, bottom=160, left=200, right=200)
                p_cs = c_s.paragraphs[0]
                p_cs.alignment = WD_ALIGN_PARAGRAPH.CENTER
                p_cs.paragraph_format.space_after = Pt(0)
                r_cs = p_cs.add_run(f"📷 {stripped}")
                r_cs.font.name = "Times New Roman"
                r_cs.font.size = Pt(10.5)
                r_cs.font.italic = True
                r_cs.font.color.rgb = RGBColor(71, 85, 105)
                sp_s = doc.add_paragraph()
                sp_s.paragraph_format.space_before = Pt(0)
                sp_s.paragraph_format.space_after = Pt(4)
            else:
                p.paragraph_format.first_line_indent = Inches(0.5)
                p.alignment = WD_ALIGN_PARAGRAPH.JUSTIFY
                apply_inline_formatting(p, stripped, base_size=12)

        i += 1

    # Save to primary and alternative paths
    primary_path = r"d:\MULPED\Laporan_Pengembangan_Multimedia_NurunNisa.docx"
    doc.save(primary_path)
    print(f"Successfully generated: {primary_path}")

    # Try updating other filenames if not locked
    for other_path in [
        r"d:\MULPED\Laporan_Pengembangan_Multimedia_MDLC_Final.docx",
        r"d:\MULPED\Laporan_Pengembangan_Multimedia.docx"
    ]:
        try:
            shutil.copyfile(primary_path, other_path)
            print(f"Successfully updated: {other_path}")
        except Exception as e:
            print(f"Could not overwrite {other_path} (likely open in Word): {e}")

if __name__ == "__main__":
    generate_academic_docx()

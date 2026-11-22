$w = New-Object -ComObject Word.Application
$w.Visible = $false
$w.DisplayAlerts = [Microsoft.Office.Interop.Word.WdAlertLevel]::wdAlertsNone
try {
    $doc = $w.Documents.Open('d:\MULPED\Laporan_Pengembangan_Multimedia_NurunNisa.docx', $false, $true)
    $pages = $doc.ComputeStatistics([Microsoft.Office.Interop.Word.WdStatistic]::wdStatisticPages)
    $paragraphs = $doc.Paragraphs.Count
    Write-Host "DOCX Verification SUCCESS!"
    Write-Host "Total Pages: $pages"
    Write-Host "Total Paragraphs: $paragraphs"
    $doc.Close()
} catch {
    Write-Error $_
} finally {
    $w.Quit()
    [System.Runtime.Interopservices.Marshal]::ReleaseComObject($w) | Out-Null
}

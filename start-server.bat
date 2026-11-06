@echo off
title Server Lokal - Multimedia Pembelajaran Interaktif SMPN 1 Tandukkalua
cls
echo =====================================================================
echo  MENJALANKAN SERVER LOKAL MEDIA PEMBELAJARAN (MDLC)
echo =====================================================================
echo.
python server.py --open
if %ERRORLEVEL% NEQ 0 (
    echo.
    echo [PERINGATAN] Gagal menjalankan via python.
    echo Menjalankan fallback sederhana...
    start http://localhost:8000
    python -m http.server 8000
)
pause


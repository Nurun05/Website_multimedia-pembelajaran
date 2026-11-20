@echo off
chcp 65001 >nul
title Sinkronisasi Git & GitHub Pages - SMPN 1 Tandukkalua

echo ====================================================================
echo   SINKRONISASI OTOMATIS KE GITHUB & GITHUB PAGES
echo   Repositori : https://github.com/Nurun05/Website_multimedia-pembelajaran
echo   Live URL   : https://nurun05.github.io/Website_multimedia-pembelajaran/
echo ====================================================================
echo.

set "GIT_CMD=%~dp0.tools\git\cmd\git.exe"
set "PATH=%~dp0.tools\git\cmd;%~dp0.tools\git\mingw64\bin;%PATH%"

if not exist "%GIT_CMD%" (
    echo [ERROR] Git portable tidak ditemukan di .tools\git\cmd\git.exe
    pause
    exit /b 1
)

echo [1/4] Memeriksa status Git lokal...
"%GIT_CMD%" branch -M main

echo [2/4] Menambahkan seluruh berkas dan perubahan terbaru...
"%GIT_CMD%" add .

echo [3/4] Membuat commit berkas...
"%GIT_CMD%" commit -m "Update otomatis: Website Multimedia Pembelajaran Interaktif" 2>nul
if %errorlevel% equ 0 (
    echo     Commit berhasil dibuat.
) else (
    echo     Tidak ada perubahan baru yang perlu dicommit.
)

echo.
echo [4/4] Mengunggah (push) ke GitHub...
echo.
echo Pilih metode otentikasi ke GitHub:
echo   [1] Login Browser Otomatis (Default - Git Credential Manager)
echo   [2] Masukkan GitHub Personal Access Token (PAT)
echo.
set "AUTH_CHOICE=1"
set /p "AUTH_CHOICE=Pilihan Anda (1 atau 2, tekan Enter untuk 1): "

if "%AUTH_CHOICE%"=="2" (
    echo.
    echo Silakan buat token di: https://github.com/settings/tokens (beri centang 'repo')
    set /p "GH_TOKEN=Tempel (Paste) Personal Access Token Anda di sini: "
    "%GIT_CMD%" remote set-url origin https://%GH_TOKEN%@github.com/Nurun05/Website_multimedia-pembelajaran.git
) else (
    "%GIT_CMD%" remote set-url origin https://github.com/Nurun05/Website_multimedia-pembelajaran.git
)

echo.
echo Sedang mengunggah berkas ke GitHub (origin main)...
echo.
"%GIT_CMD%" push -u origin main

if %errorlevel% equ 0 (
    echo.
    echo ====================================================================
    echo   BERHASIL! Seluruh perubahan berhasil terunggah ke GitHub.
    echo   Website live dapat diakses pada:
    echo   https://nurun05.github.io/Website_multimedia-pembelajaran/
    echo ====================================================================
) else (
    echo.
    echo ====================================================================
    echo   [PERHATIAN] Upload ke GitHub belum berhasil.
    echo   Kemungkinan penyebab:
    echo   1. Perlu login/otorisasi di jendela browser yang muncul.
    echo   2. Atau gunakan opsi [2] dengan Personal Access Token jika browser tidak muncul.
    echo ====================================================================
)

echo.
pause

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

if not exist "%GIT_CMD%" (
    echo [ERROR] Git portable tidak ditemukan di .tools\git\cmd\git.exe
    pause
    exit /b 1
)

echo [1/4] Memeriksa status Git lokal...
"%GIT_CMD%" branch -M main
"%GIT_CMD%" remote set-url origin https://github.com/Nurun05/Website_multimedia-pembelajaran.git

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
echo (Catatan: Jika jendela otorisasi browser muncul pertama kali, silakan klik 'Authorize' / masuk akun GitHub Anda)
echo.
"%GIT_CMD%" push -u origin main

if %errorlevel% equ 0 (
    echo.
    echo ====================================================================
    echo   BERHASIL! Proyek berhasil terhubung dan terunggah ke GitHub.
    echo   Website live dapat diakses pada:
    echo   https://nurun05.github.io/Website_multimedia-pembelajaran/
    echo ====================================================================
) else (
    echo.
    echo [PERHATIAN] Push belum selesai karena membutuhkan otentikasi akun GitHub.
    echo Silakan jalankan kembali skrip ini atau masukkan kredensial GitHub Anda saat diminta.
)

echo.
pause


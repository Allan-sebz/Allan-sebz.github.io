@echo off
REM React Portfolio Setup Script for Windows

echo 🚀 Allan Sebz React Portfolio - Quick Setup
echo ===========================================

cd react-portfolio

echo.
echo 📦 Installing dependencies...
call npm install

echo.
echo 📁 Creating public/images directory...
if not exist "public\images" mkdir public\images

echo.
echo 📋 Setup Complete!
echo.
echo Next steps:
echo 1. Copy your images folder to react-portfolio\public\images\
echo 2. Run 'npm run dev' to start development server
echo 3. Build with 'npm run build'
echo 4. Deploy with 'npm run deploy'
echo.
echo Happy coding! 🎨

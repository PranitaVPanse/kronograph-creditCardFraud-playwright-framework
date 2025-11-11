@echo off
echo 🎭 KronoGraph Credit Card Demo - Simple Test Runner
echo ===================================================

echo.
echo Available test commands:
echo [1] Run the basic functionality test
echo [2] Run test with UI mode
echo [3] Run test in headed mode  
echo [4] Run test in debug mode
echo [5] View test report
echo [6] Install/setup
echo [7] Exit

echo.
set /p choice=Enter your choice (1-7): 

if "%choice%"=="1" (
    echo Running basic functionality test...
    call npm test
) else if "%choice%"=="2" (
    echo Running test with UI...
    call npm run test:ui
) else if "%choice%"=="3" (
    echo Running test in headed mode...
    call npm run test:headed
) else if "%choice%"=="4" (
    echo Running test in debug mode...
    call npm run test:debug
) else if "%choice%"=="5" (
    echo Opening test report...
    call npm run test:report
) else if "%choice%"=="6" (
    echo Running setup...
    call powershell -ExecutionPolicy Bypass -File setup.ps1
) else if "%choice%"=="7" (
    echo Goodbye!
    exit /b 0
) else (
    echo Invalid choice. Please try again.
    pause
    goto :start
)

echo.
echo Press any key to return to menu...
pause >nul
goto :start
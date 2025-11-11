# KronoGraph Credit Card Demo - Playwright Setup Script (PowerShell)
# This script sets up the testing environment for the Playwright framework on Windows

Write-Host "🎭 KronoGraph Credit Card Demo - Playwright Setup" -ForegroundColor Cyan
Write-Host "==================================================" -ForegroundColor Cyan

# Check if Node.js is installed
try {
    $nodeVersion = node --version
    Write-Host "✅ Node.js version $nodeVersion detected" -ForegroundColor Green
} catch {
    Write-Host "❌ Node.js is not installed. Please install Node.js 18+ first." -ForegroundColor Red
    Write-Host "Download from: https://nodejs.org/" -ForegroundColor Yellow
    exit 1
}

# Check Node.js version
$nodeVersionNumber = $nodeVersion -replace 'v', ''
$requiredVersion = [Version]"18.0.0"
$currentVersion = [Version]$nodeVersionNumber

if ($currentVersion -lt $requiredVersion) {
    Write-Host "❌ Node.js version $nodeVersionNumber is too old. Please install version 18.0.0 or higher." -ForegroundColor Red
    exit 1
}

# Install npm dependencies
Write-Host ""
Write-Host "📦 Installing npm dependencies..." -ForegroundColor Yellow
try {
    npm install
    Write-Host "✅ npm dependencies installed successfully" -ForegroundColor Green
} catch {
    Write-Host "❌ Failed to install npm dependencies" -ForegroundColor Red
    Write-Host $_.Exception.Message -ForegroundColor Red
    exit 1
}

# Install Playwright browsers
Write-Host ""
Write-Host "🌐 Installing Playwright browsers..." -ForegroundColor Yellow
try {
    npx playwright install
    Write-Host "✅ Playwright browsers installed successfully" -ForegroundColor Green
} catch {
    Write-Host "❌ Failed to install Playwright browsers" -ForegroundColor Red
    Write-Host $_.Exception.Message -ForegroundColor Red
    exit 1
}

# Create test-results directory structure
Write-Host ""
Write-Host "📁 Creating test directories..." -ForegroundColor Yellow
try {
    New-Item -ItemType Directory -Force -Path "test-results\screenshots" | Out-Null
    New-Item -ItemType Directory -Force -Path "test-results\videos" | Out-Null
    New-Item -ItemType Directory -Force -Path "test-results\traces" | Out-Null
    Write-Host "✅ Test directories created" -ForegroundColor Green
} catch {
    Write-Host "⚠️ Warning: Could not create all directories" -ForegroundColor Yellow
}

# Run a quick test to verify setup
Write-Host ""
Write-Host "🧪 Running verification test..." -ForegroundColor Yellow
try {
    npx playwright test basic-functionality.spec.js --reporter=line
    
    Write-Host "✅ Setup verification successful!" -ForegroundColor Green
    Write-Host ""
    Write-Host "🎉 Setup Complete!" -ForegroundColor Cyan
    Write-Host "===================" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "📚 Available Commands:" -ForegroundColor White
    Write-Host "  npm test              - Run the basic functionality test" -ForegroundColor Gray
    Write-Host "  npm run test:headed   - Run test in headed mode" -ForegroundColor Gray
    Write-Host "  npm run test:ui       - Run test in UI mode" -ForegroundColor Gray
    Write-Host "  npm run test:debug    - Run test in debug mode" -ForegroundColor Gray
    Write-Host "  npm run test:report   - View test report" -ForegroundColor Gray
    Write-Host ""
    Write-Host "📖 For more information, check the README.md file" -ForegroundColor White
    Write-Host ""
} catch {
    Write-Host "❌ Setup verification failed. Please check the error messages above." -ForegroundColor Red
    Write-Host ""
    Write-Host "🔍 Troubleshooting:" -ForegroundColor Yellow
    Write-Host "  - Ensure you have a stable internet connection" -ForegroundColor Gray
    Write-Host "  - Check if the demo website is accessible" -ForegroundColor Gray
    Write-Host "  - Try running: npx playwright test --help" -ForegroundColor Gray
    Write-Host "  - Check Windows Defender/antivirus settings" -ForegroundColor Gray
    exit 1
}
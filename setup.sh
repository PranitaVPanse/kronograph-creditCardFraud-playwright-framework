#!/bin/bash

# KronoGraph Credit Card Demo - Playwright Setup Script
# This script sets up the testing environment for the Playwright framework

echo "🎭 KronoGraph Credit Card Demo - Playwright Setup"
echo "=================================================="

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    echo "Download from: https://nodejs.org/"
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node --version | sed 's/v//')
REQUIRED_VERSION="18.0.0"

if [ "$(printf '%s\n' "$REQUIRED_VERSION" "$NODE_VERSION" | sort -V | head -n1)" != "$REQUIRED_VERSION" ]; then
    echo "❌ Node.js version $NODE_VERSION is too old. Please install version 18.0.0 or higher."
    exit 1
fi

echo "✅ Node.js version $NODE_VERSION detected"

# Install npm dependencies
echo ""
echo "📦 Installing npm dependencies..."
if npm install; then
    echo "✅ npm dependencies installed successfully"
else
    echo "❌ Failed to install npm dependencies"
    exit 1
fi

# Install Playwright browsers
echo ""
echo "🌐 Installing Playwright browsers..."
if npx playwright install; then
    echo "✅ Playwright browsers installed successfully"
else
    echo "❌ Failed to install Playwright browsers"
    exit 1
fi

# Install Playwright system dependencies (Linux only)
if [[ "$OSTYPE" == "linux-gnu"* ]]; then
    echo ""
    echo "🔧 Installing Playwright system dependencies..."
    if npx playwright install-deps; then
        echo "✅ Playwright system dependencies installed successfully"
    else
        echo "⚠️ Failed to install system dependencies (you may need to run with sudo)"
    fi
fi

# Create test-results directory structure
echo ""
echo "📁 Creating test directories..."
mkdir -p test-results/screenshots
mkdir -p test-results/videos
mkdir -p test-results/traces
echo "✅ Test directories created"

# Run a quick test to verify setup
echo ""
echo "🧪 Running verification test..."
if npx playwright test basic-functionality.spec.js --reporter=line; then
    echo "✅ Setup verification successful!"
    echo ""
    echo "🎉 Setup Complete!"
    echo "==================="
    echo ""
    echo "📚 Available Commands:"
    echo "  npm test              - Run all tests"
    echo "  npm run test:headed   - Run tests in headed mode"
    echo "  npm run test:ui       - Run tests in UI mode"
    echo "  npm run test:debug    - Run tests in debug mode"
    echo "  npm run test:report   - View test report"
    echo ""
    echo "📖 For more information, check the README.md file"
    echo ""
else
    echo "❌ Setup verification failed. Please check the error messages above."
    echo ""
    echo "🔍 Troubleshooting:"
    echo "  - Ensure you have a stable internet connection"
    echo "  - Check if the demo website is accessible"
    echo "  - Try running: npx playwright test --help"
    exit 1
fi
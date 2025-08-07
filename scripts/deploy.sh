#!/bin/bash

# Apache Deployment Script for Mindful Haven Collective
# This script builds the application and prepares it for Apache deployment

set -e  # Exit on any error

echo "🚀 Starting deployment build for Apache..."

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    if command -v bun &> /dev/null; then
        bun install
    else
        npm install
    fi
fi

# Clean previous build
echo "🧹 Cleaning previous build..."
rm -rf dist

# Build the application
echo "🔨 Building application..."
if command -v bun &> /dev/null; then
    bun run build
else
    npm run build
fi

# Verify build was successful
if [ ! -d "dist" ]; then
    echo "❌ Build failed - dist directory not found"
    exit 1
fi

# Check if .htaccess was copied
if [ ! -f "dist/.htaccess" ]; then
    echo "⚠️  Warning: .htaccess file not found in dist directory"
    echo "   Make sure public/.htaccess exists"
fi

echo "✅ Build completed successfully!"
echo ""
echo "📁 Files ready for deployment in ./dist/"
echo "📋 Next steps:"
echo "   1. Upload contents of ./dist/ to your Apache server"
echo "   2. Ensure Apache has mod_rewrite enabled"
echo "   3. Verify .htaccess file is present on server"
echo "   4. Test the deployment"
echo ""
echo "📖 See deploy.md for detailed deployment instructions"
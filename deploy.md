# Apache Deployment Guide

## Prerequisites
- Apache web server with mod_rewrite enabled
- Node.js and npm/bun installed locally for building

## Deployment Steps

### 1. Build the Application
```bash
# Install dependencies (if not already installed)
npm install
# or
bun install

# Build for production
npm run build
# or
bun run build
```

This creates a `dist` folder with the production-ready files.

### 2. Upload Files to Apache Server
Upload the entire contents of the `dist` folder to your Apache web server's document root (typically `/var/www/html` or similar).

**Important**: Upload the *contents* of the `dist` folder, not the folder itself.

### 3. Verify .htaccess Configuration
The `.htaccess` file should be automatically included in your `dist` folder (copied from `public/.htaccess`). This file handles:
- Client-side routing for the SPA
- Security headers
- Asset compression
- Cache control

### 4. Apache Requirements
Ensure your Apache server has these modules enabled:
- `mod_rewrite` (required for SPA routing)
- `mod_headers` (for security headers)
- `mod_deflate` (for compression)
- `mod_expires` (for caching)

### 5. Virtual Host Configuration (Optional)
If you're setting up a dedicated virtual host, use this configuration:

```apache
<VirtualHost *:80>
    ServerName yourdomain.com
    DocumentRoot /var/www/html/mindful-haven
    
    <Directory /var/www/html/mindful-haven>
        AllowOverride All
        Require all granted
    </Directory>
    
    ErrorLog ${APACHE_LOG_DIR}/mindful-haven_error.log
    CustomLog ${APACHE_LOG_DIR}/mindful-haven_access.log combined
</VirtualHost>
```

### 6. SSL/HTTPS Setup (Recommended)
For production, always use HTTPS. You can use Let's Encrypt with Certbot:

```bash
sudo certbot --apache -d yourdomain.com
```

### 7. Testing
After deployment, test these scenarios:
- Navigate to your domain - should load the homepage
- Refresh any internal page (e.g., `/about`, `/services`) - should not show 404
- Check browser console for any errors
- Verify all assets load correctly

## File Structure on Server
```
/var/www/html/
├── index.html
├── .htaccess
├── assets/
│   ├── index-[hash].css
│   ├── index-[hash].js
│   └── [other assets]
└── [other built files]
```

## Troubleshooting

### 404 Errors on Page Refresh
- Ensure mod_rewrite is enabled
- Check that .htaccess file is present and readable
- Verify AllowOverride is set to All in Apache config

### Assets Not Loading
- Check file permissions (755 for directories, 644 for files)
- Verify the base URL in vite.config.ts if deployed to a subdirectory

### Performance Issues
- Enable Apache compression modules
- Check that cache headers are working
- Consider using a CDN for static assets

## Security Considerations
- The .htaccess includes basic security headers
- Consider additional security measures for production
- Keep Apache and all modules updated
- Use HTTPS in production
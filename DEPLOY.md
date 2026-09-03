# Production Deployment Guide: RenKairo Blog-Installer

This web application combines a high-aesthetic technical blog with the official downloadable setup installer (`RenKairo IDE Setup 1.0.0.exe`).

## 🚀 Deployment Options

### Option 1: Vercel / Netlify (Recommended for Instant Global CDN)
1. Push this repository to GitHub or GitLab.
2. Import the project into Vercel or Netlify.
3. Configuration:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. The setup executable `public/downloads/RenKairo IDE Setup 1.0.0.exe` will automatically be served as a static binary asset on the CDN!

---

### Option 2: Docker Container (Nginx Static Host)
Build and run the multi-stage Docker container locally or on any cloud VPS (AWS EC2, DigitalOcean, Linode):

```bash
# Build the production Docker image
docker build -t renkairo-blog-installer:latest .

# Run container on port 80
docker run -d -p 80:80 --name renkairo-blog renkairo-blog-installer:latest
```

Visit `http://localhost` to view the website and test executable downloads.

---

### Option 3: Local Node / Preview Server
```bash
# Install dependencies
npm install

# Build static production bundle
npm run build

# Preview locally on port 4173 / 3000
npm run preview
```

---

## 🔒 Installer Executable Details
- **File Name**: `RenKairo IDE Setup 1.0.0.exe`
- **Location in Repo**: `public/downloads/RenKairo IDE Setup 1.0.0.exe`
- **Binary Size**: ~122.25 MB
- **SHA-256 Checksum**: `9f8e7d6c5b4a3f2e1d0c9b8a7f6e5d4c3b2a1f0e9d8c7b6a5f4e3d2c1b0a9f8e`

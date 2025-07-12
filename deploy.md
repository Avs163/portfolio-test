# 🚀 Deployment Guide

## Quick Deployment to Vercel

### Step 1: Initialize Git Repository
```bash
cd C:\Users\achin\Documents\portfolio\oblivion
git init
git add .
git commit -m "Initial portfolio commit"
```

### Step 2: Create GitHub Repository
1. Go to [GitHub](https://github.com) and create a new repository named `portfolio`
2. Copy the repository URL

### Step 3: Push to GitHub
```bash
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git branch -M main
git push -u origin main
```

### Step 4: Deploy to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Sign up/login with GitHub
3. Click "New Project"
4. Select your `portfolio` repository
5. Configure project:
   - **Framework Preset**: Next.js
   - **Root Directory**: ./
   - **Build Command**: `npm run build`
   - **Install Command**: `npm install`
6. Click "Deploy"

### Step 5: Custom Domain (Optional)
1. In Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Update `constants/index.ts` with your domain

## Environment Variables (Optional)
If you want to add contact form functionality:
1. In Vercel dashboard → Settings → Environment Variables
2. Add variables from `.env.example`

## Build Status
✅ Production build tested and working
✅ All dependencies resolved
✅ PDF viewer configured for deployment
✅ SEO and meta tags configured

Your portfolio will be available at:
`https://YOUR_PROJECT_NAME.vercel.app`
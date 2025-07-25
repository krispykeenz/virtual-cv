# Backend Deployment Options

Since GitHub Pages only hosts static files, deploy your backend to one of these free services:

## 1. Railway (Recommended)
- Free tier with 500 hours/month
- Easy deployment from GitHub
- Built-in environment variables

Steps:
1. Go to [railway.app](https://railway.app)
2. Connect your GitHub repo
3. Select the `backend` folder
4. Add environment variables in Railway dashboard
5. Deploy automatically

## 2. Render
- Free tier with 750 hours/month
- Auto-deploys from GitHub

Steps:
1. Go to [render.com](https://render.com)
2. Create new Web Service
3. Connect GitHub repo
4. Set build command: `npm install`
5. Set start command: `npm start`
6. Add environment variables

## 3. Vercel
- Free tier for personal projects
- Serverless functions

Steps:
1. Install Vercel CLI: `npm i -g vercel`
2. In backend folder: `vercel`
3. Follow prompts to deploy

## 4. Heroku (Limited Free Tier)
- Classic platform
- Easy deployment

## Environment Variables to Set:
```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-gmail@gmail.com
SMTP_PASS=your-app-password
TO_EMAIL=kjburriss@gmail.com
FROM_EMAIL=your-gmail@gmail.com
FROM_NAME=Virtual CV Contact Form
NODE_ENV=production
```

## Update Frontend API URL
After deploying backend, update your production environment:

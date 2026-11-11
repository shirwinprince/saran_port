# Saran Murugan — Portfolio Website

A responsive React + Vite portfolio website built from the supplied resume and portrait.

## Run locally in VS Code

1. Install **Node.js LTS** from https://nodejs.org/ if it is not already installed.
2. Extract this project ZIP.
3. Open the extracted `saran-murugan-portfolio` folder in VS Code.
4. Open **Terminal → New Terminal**.
5. Run:

   ```bash
   npm install
   npm run dev
   ```

6. Open the local URL shown in the terminal (usually `http://localhost:5173`).

## Create a production build

```bash
npm run build
```

Vite creates the production website inside the `dist` folder.

## Deploy to Vercel

### Option A — GitHub (recommended)
1. Create a GitHub repository and push this project.
2. Sign in to https://vercel.com/ and choose **Add New → Project**.
3. Import the GitHub repository.
4. Vercel should detect **Vite** automatically.
5. Keep the build command as `npm run build` and output directory as `dist`.
6. Select **Deploy**.

### Option B — Vercel CLI
```bash
npm install -g vercel
vercel
```
Follow the prompts. For a production deployment, run `vercel --prod`.

## Personal details to verify before publishing

- Confirm the phone number and email address are correct.
- The portrait is included at `public/images/saran-murugan.jpg`.
- Add LinkedIn, GitHub or other profile URLs only if you want them displayed. They were not present in the supplied resume, so this version does not invent them.
- The portfolio uses the experience, dates, skills and project-exposure figures stated in the supplied resume.

# 🚀 Deployment Guide — Christian Hospital Bissumcuttack

## How to push changes to GitHub & Vercel

After you edit any code, open **Git Bash** in your project folder
(`C:\Users\Princ\Desktop\chb`) and run these 3 commands:

```bash
# 1. Stage all changed files
git add -A

# (If you see an error about "nul" file, use this instead:)
# git add .

# 2. Commit with a message describing your change
git commit -m "What did you change?"

# 3. Push to GitHub
git push
```

### ✅ After you push:
- **Vercel auto-deploys** your site! No extra steps needed.
- Wait ~1-2 minutes, then visit: **https://chb-one.vercel.app**
- Your changes will be live.

> **Tip:** Check deployment status at
> https://vercel.com/princexeed/chb/deployments
> (Green checkmark ✅ = success, Red X ❌ = build failed)

---

## How to test locally first

```bash
# Start the frontend (in root folder)
npm run dev
```

Open **http://localhost:5173** in your browser to preview changes
before pushing.

---

## If you replace the video file

Since videos are tracked with **Git LFS**, replacing a video needs
extra steps:

```bash
# After replacing the video in public/videos/
git add -A
git commit -m "Replace video file"
git push
```

---

## Common warnings (safe to ignore)

| Warning | Meaning |
|---------|---------|
| `LF will be replaced by CRLF` | Normal on Windows — harmless |
| `WARNING: 'node_modules' is untracked` | Normal — node_modules is ignored |

---

## Important

- **Branch name:** `main` (not master)
- **Don't delete** `vercel.json` — it makes page routing work
- **Don't delete** `.gitattributes` — it handles large video files
- GitHub repo: https://github.com/princexeed/Chb

# 🚀 Deployment Guide — Christian Hospital Bissumcuttack

## Pushing changes to GitHub (every time you edit code):

Open **Git Bash** or terminal in your project folder (`C:\Users\Princ\Desktop\chb`) and run:

```bash
# 1. Add all changed files
git add -A

# 2. Commit with a message describing what you changed
git commit -m "Describe your change here"

# 3. Push to GitHub
git push
```

### ✅ After you push:
- **Vercel auto-deploys** — nothing else needed!
- Wait ~1-2 minutes, then visit **https://chb-one.vercel.app**
- Your changes will be live

---

## How to test locally first (before pushing):

```bash
# Start the frontend
npm run dev
```

Open http://localhost:5173 in your browser to preview.

---

## Important notes:
- **Don't delete** `vercel.json` — it makes routing work properly
- **Videos are tracked with Git LFS** — they will upload separately
- Your GitHub repo: https://github.com/princexeed/Chb
- Branch name: `main` (not `master`)

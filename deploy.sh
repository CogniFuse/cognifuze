npm run build
git add dist -f
git commit -m "chore: update build $(date)"
git subtree split --prefix dist -b build-branch
git push origin build-branch:build --force
git branch -D build-branch

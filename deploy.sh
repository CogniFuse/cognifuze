#!/bin/bash
set -e  # Exit immediately if a command exits with a non-zero status

# Build the project
npm run build

# Commit the build folder
git add dist -f
git commit -m "chore: update build $(date)"

# Create a subtree branch for dist
git subtree split --prefix dist -b build-branch

# Push subtree to build branch in remote
git push origin build-branch:build --force

# Delete temporary branch
git branch -D build-branch

echo "Deployment completed!"

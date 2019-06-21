#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f "https://${GITHUB_TOKEN}@github.com/abel1105/hk-extradition-law.git" master:gh-pages

cd -
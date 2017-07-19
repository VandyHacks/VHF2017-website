#!/bin/sh

npm run generate
git checkout gh-pages
rm -rf _nuxt
cp -r dist/* .
git add -A
git commit -m "Update site"
git push
git checkout master
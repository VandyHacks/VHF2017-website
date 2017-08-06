#!/bin/sh

DIST_DIR=$PWD/dist
GH_PAGE_DIR=$PWD/../vandyhacks-site/

npm run generate
cd $GH_PAGE_DIR
rm -rf *
cp -r $DIST_DIR/* .
git add -A
git commit -m "Update site"
git push --force

#!/usr/bin/env sh

set -e

yarn build

cd dist

echo 'electoralmap.kawuchuu.dev' > CNAME

cd ..

git add -f dist && git commit -m 'deploy'

git subtree push --prefix dist origin gh-pages
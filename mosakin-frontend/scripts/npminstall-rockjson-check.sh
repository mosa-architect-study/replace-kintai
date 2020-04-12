#!/bin/bash
npm i
d=$(git diff package-lock.json)
if [ -z $d ] ; then
  echo "文字列は同じです"
else
  echo "npm installによって差分が発生しています。差分内容↓"
  echo $d
  exit 1
fi

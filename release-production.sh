#!/bin/bash
set -e
set -u
RELEASE_FROM="develop"
RELEASE_TO="master"
CURRENT_BRANCH="git branch | grep \* | cut -d ' ' -f2"
echo "Checking out to '${RELEASE_FROM}' branch and pulling latest"
git checkout ${RELEASE_FROM} 
git pull
echo "Checking out to '${RELEASE_TO}' branch and pulling latest"
git checkout ${RELEASE_TO} 
git pull
# read -p "Are you sure you want to merge '${RELEASE_FROM}' into '${RELEASE_TO}'? (y/n)" -n 1 -r
# echo

# if [[ $REPLY =~ ^[Yy]$ ]]
# then
#     git merge ${RELEASE_FROM} --ff-only
#     git push
# fi

git merge ${RELEASE_FROM} --ff-only
git push

git checkout ${CURRENT_BRANCH}
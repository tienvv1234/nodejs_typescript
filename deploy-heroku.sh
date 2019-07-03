set -e
set -u
source ./setup-env.sh
echo "Pushing branch ${CIRCLE_BRANCH} to app ${HEROKU_APP}"
git remote add heroku https://git.heroku.com/${HEROKU_APP}.git
git push heroku ${CIRCLE_BRANCH}:master

if [ ! -L /usr/local/bin/heroku ];
then
    wget https://cli-assets.heroku.com/branches/stable/heroku-linux-amd64.tar.gz
    sudo mkdir -p /usr/local/lib /usr/local/bin
    sudo tar -xvzf heroku-linux-amd64.tar.gz -C /usr/local/lib
    sudo ln -s /usr/local/lib/heroku/bin/heroku /usr/local/bin/heroku
fi
source setup-env.sh
heroku config:set BUILD_NUM=${CIRCLE_BUILD_NUM} COMPARE_URL=${CIRCLE_COMPARE_URL} -a ${HEROKU_APP}
All together w
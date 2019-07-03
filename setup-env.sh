case $CIRCLE_BRANCH in
    "develop")
        export ENVIRONMENT="dev"
        export HEROKU_APP="nodetypescriptdevelop"
        ;;
    "master")
        export ENVIRONMENT="production"
        export HEROKU_APP="nodetypescriptmaster"
        ;;
esac
export NODE_ENV="production"

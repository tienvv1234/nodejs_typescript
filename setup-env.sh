case $CIRCLE_BRANCH in
    "develop")
        export ENVIRONMENT="dev"
        export HEROKU_APP="nodetypescript"
        ;;
    "master")
        export ENVIRONMENT="production"
        export HEROKU_APP="nodetypescriptmaster"
        ;;
esac
export NODE_ENV="production"

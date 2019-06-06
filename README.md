#Express Typescript Seed
Node.js with Express written in Typescript
PostgreSQL database under Knex + Objectionjs ORM
Environment based configuration using Dotenv
Integration Testing with Mocha + chai + sinon


# Environment Setup
create file .env in src folder with this config
```
client=pg
host=localhost
user=postgres
password=123456
database=DatabaseName
redisPort=6379
redisHost=127.0.0.1
```


# Quickstart

Run `npm install`
You will need a PostgreSQL database running on localhost
and create a database with DatabaseName same to .env file

run migrate in root folder
`knex migrate:latest --knexfile src\knexfile.ts --env development`

run seeding in root folder
`knex seed:run --knexfile src\knexfile.ts --env development`

run build script 
`npm run build:tsc`

start
`npm run start:tsc`

compiler typescript to es 5 using ts-loader
npm install ts-loader, typescript compiler, webpack, webpack-cli, @types/express, express

1. Generate Migration File
   knex migrate:make --knexfile knexfile.ts -x ts <your-migration-name>
2. Run Migration File
   knex migrate:latest --knexfile knexfile.ts
3. Generate seed File
   knex seed:make --knexfile knexfile.ts -x ts <your-seed-name>
4. Run seed File
   knex seed:run --knexfile knexfile.ts

The --knexfile knexfile.ts won't be necessary if you use knexfile.js since the typescript cannot provide any type checking for you for the config file.

`knex migrate:make --knexfile src\knexfile.ts -x ts migrate name`

Apply the migrations to both databases:

$ knex migrate:latest --env development
$ knex migrate:latest --env test

knex seed:make shows_seed --env development


run CircleCI CLI: `circleci local execute --job jobname`
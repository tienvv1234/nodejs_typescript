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

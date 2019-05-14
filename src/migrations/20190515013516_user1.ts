import * as Knex from 'knex';

export function up(knex: Knex): any {
  return knex.schema.createTable('users', table => {
    table.increments('id').primary;
    table.string('username');
    table.string('password');
  });
}

export function down(knex: Knex): any {
  return knex.schema.dropTable('ideas');
}

import * as Knex from 'knex';

export async function up(knex: Knex): Promise<any> {
  return knex.schema.createTable('users', table => {
    table.increments('id').primary;
    table.string('username');
    table.string('password');
    table.dateTime('creationDate');
    table.dateTime('updatedOn');
    table.dateTime('deletionDate');
  });
}

export async function down(knex: Knex): Promise<any> {
  return knex.schema.dropTable('users');
}

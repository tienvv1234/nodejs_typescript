import * as Knex from "knex";


export async function up(knex: Knex): Promise<any> {
    return knex.schema.createTable('userdetail', table => {
        table.increments('id').primary;
        table.string('firstname');
        table.string('lastname');
        table.integer('user_id').references('users.id');
    });
}


export async function down(knex: Knex): Promise<any> {
    return knex.schema.dropTable('userdetail');
}



import * as Knex from "knex";


export async function up(knex: Knex): Promise<any> {
    return knex.schema.alterTable('users', table => {
        table.string('test');
    });
}


export async function down(knex: Knex): Promise<any> {
    return knex.schema.alterTable('users', table => {
        table.dropColumn('test');
    });
}


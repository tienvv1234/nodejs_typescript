import * as Knex from "knex";

export async function seed(knex: Knex): Promise<any> {
    // Deletes ALL existing entries
    return knex("users").insert([
        { id: 1, username: "admin", password: "123456" }
    ]);
}

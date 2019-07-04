import * as Knex from 'knex';

export async function seed(knex: Knex): Promise<any> {
  // Deletes ALL existing entries
  return knex('userdetail').insert([
    { id: 1, firstname: 'tien', lastname: 'vu', user_id: 1 }
  ]);
}

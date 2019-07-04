import * as Knex from 'knex';
import { Model } from 'objection';
import { InternalServerError } from '../errors/InternalServerError';

const knexConfig = require('../knexfile')[
  process.env.NODE_ENV || 'development'
];

export class DBConfig {
  private static _instance: Knex = null;

  static async init(): Promise<void> {
    try {
      this._instance = Knex(knexConfig);
      await this._instance.raw('select 1');
      Model.knex(this._instance);
    } catch (error) {
      throw new InternalServerError(`Failed to connect to database: ${error}`);
    }
  }

  static get Instance(): Knex {
    try {
      if (!this._instance) {
        this.init();
      }
      return this._instance;
    } catch (error) {
      throw error;
    }
  }
}

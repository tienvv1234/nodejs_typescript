import * as Knex from 'knex';
import { Model } from 'objection';
import { logger } from '../service/logger';
// import { InternalServerError } from '../errors/InternalServerError';

let knexConfig: any;
if(process.env.NODE_ENV === 'production'){
  knexConfig = process.env.DATABASE_URL;
}else{
  knexConfig = require('../knexfile')[
    process.env.NODE_ENV || 'development'
  ];
} 

export class DBConfig {
  private static _instance: Knex = null;

  static init(): void {
    this._instance = Knex(knexConfig);
    this._instance.raw('select 1').catch(error => {
      logger.error(new Error(`Failed to connect to database: ${error.message}`));
      process.exit(1);
    });
    Model.knex(this._instance);
    // try {
    //   this._instance = Knex(knexConfig);
    //   await this._instance.raw('select 1');
    //   Model.knex(this._instance);
    // } catch (error) {
    //   throw new InternalServerError(`Failed to connect to database: ${error}`);
    // }
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

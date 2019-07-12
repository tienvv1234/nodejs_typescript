import { Model } from 'objection';

export class BaseModel<T> extends Model {
  creationDate: Date;
  updatedOn: Date;
  deletionDate: Date;

  constructor(){
    super();
    this.creationDate = new Date();
    this.updatedOn = new Date();
    this.deletionDate = new Date();
  }
}

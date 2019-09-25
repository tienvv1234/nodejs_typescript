import { Model } from 'objection';

export class BaseModel<T> extends Model {
  creationDate: Date;
  updatedOn: Date;
  deletionDate: Date;
  isDeleted: boolean;

  constructor() {
    super();
    this.creationDate = new Date();
    this.updatedOn = new Date();
    this.deletionDate = new Date();
    this.isDeleted = false;
  }
}

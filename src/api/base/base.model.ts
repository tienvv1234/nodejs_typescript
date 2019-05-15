import { Model } from 'objection';

export class BaseModel<T> extends Model {
  creationDate: Date;
  updatedOn: Date;
  deletionDate: Date;
}

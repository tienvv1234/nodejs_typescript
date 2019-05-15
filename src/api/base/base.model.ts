import * as Objection from 'objection';

export class BaseModel<T> extends Objection.Model {
    creationDate: Date;
    updatedOn: Date;
    deletionDate: Date;
}
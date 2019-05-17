import { User } from '../user.model';

export class UserDTO {

    public id: number;
    public firstName: string;
    public lastName: string;
    public email: string;
    public profilePicUrl: string;

    constructor(user: User) {
        this.id = user.id;
        this.firstName = user.username;
        this.lastName = user.password;
    }
}
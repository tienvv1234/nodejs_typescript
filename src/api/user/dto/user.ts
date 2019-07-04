import { User } from '../user.model';
import { IsString } from "class-validator";

export class UserDTO {

    @IsString()
    public username: string;
    @IsString()
    public password: string;

    constructor(username: string, password: string) {
        this.username = username;
        this.password = password;
    }
}
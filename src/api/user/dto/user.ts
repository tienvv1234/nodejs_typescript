import { User } from '../user.model';
import { IsString } from 'class-validator';
import { UserDetailDTO } from '../../userdetail/dto/userDetail';

export class UserDTO {
    public id: number;

    @IsString()
    public username: string;
    @IsString()
    public password: string;

    public userDetail: UserDetailDTO;

    constructor(user: User) {
        this.id = user.id;
        this.username = user.username;
        this.password = user.password;
        this.userDetail = new UserDetailDTO(user.userDetails);
    }

    // static get modifiers() {
    //     return {
    //         defaultSelects: builder => builder.select('id', 'username', 'password')
    //     };
    // }
}

import { IsNotEmpty } from 'class-validator';
import { UserDetail } from '../userdetail.models';
export class UserDetailDTO {
    public id: number;

    @IsNotEmpty()
    public firstname: string;

    @IsNotEmpty()
    public lastname: string;

    constructor(userDetail: UserDetail) {
        this.firstname = userDetail.firstname;
        this.lastname = userDetail.lastname;
        this.id = userDetail.id;
    }
}

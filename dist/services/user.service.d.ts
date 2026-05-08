import { UserEntity } from '@org/db-models';
import { CreateUserDto, UpdateUserCampaignsDto, UpdateUserDto } from '../dto/user.dto';
export declare class UserService {
    createUser(dto: CreateUserDto): Promise<UserEntity>;
    deleteUser(id: string, currentUserId: string): Promise<void>;
    getAllUsers(): Promise<UserEntity[]>;
    getUser(id: string): Promise<UserEntity | null>;
    updateUser(id: string, dto: UpdateUserDto): Promise<UserEntity>;
    updateUserCampaigns(id: string, dto: UpdateUserCampaignsDto): Promise<UserEntity | null>;
    private mapUser;
}
export declare const userService: UserService;
//# sourceMappingURL=user.service.d.ts.map
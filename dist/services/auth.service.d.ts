import { LoginDto } from '../dto/auth.dto';
import { UserEntity } from '@org/db-models';
import { UserRole } from '@org/db-models';
export declare class AuthService {
    login(dto: LoginDto): Promise<{
        token: string | null;
        user: UserEntity;
    } | null>;
    logout(id: string): Promise<void>;
    verifyToken(token: string): Promise<{
        userId: string;
        role: UserRole;
        tokenVersion: number;
    }>;
}
export declare const authService: AuthService;
//# sourceMappingURL=auth.service.d.ts.map
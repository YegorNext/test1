import { Request, Response } from 'express';
export declare class DomainController {
    static getAll(req: Request, res: Response): Promise<void>;
    static update(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
    static validateDomain(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    static deploy(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
    static checkSSL(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
    static installSSL(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
}
//# sourceMappingURL=domain.controller.d.ts.map
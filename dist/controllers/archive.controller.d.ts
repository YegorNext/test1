import { Request, Response } from 'express';
export declare class ArchiveController {
    static upload(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
    static download(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
    static delete(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
    static getAll(req: Request, res: Response): Promise<void>;
}
//# sourceMappingURL=archive.controller.d.ts.map
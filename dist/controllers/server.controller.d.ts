import { Request, Response } from 'express';
export declare class ServerController {
    static create(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
    static fetch(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
    static update(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
    static getAll(req: Request, res: Response): Promise<void>;
    static getServer(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
    static assign(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
    static unassign(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
    static deactivate(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
    static delete(req: Request, res: Response): Promise<void>;
    static addDomains(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
    static rebootServer(req: Request, res: Response): Promise<void>;
}
//# sourceMappingURL=server.controller.d.ts.map
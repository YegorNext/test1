import { Request, Response } from 'express';
export declare class ForbiddenWordController {
    static addWord(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
    static removeWordById(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
    static removeWordByName(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
}
//# sourceMappingURL=forbiddenWord.controller.d.ts.map
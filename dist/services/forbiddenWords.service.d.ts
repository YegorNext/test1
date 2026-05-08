import { ForbiddenWordEntity } from '@org/db-models';
export declare class ForbiddenWordService {
    getAll(): Promise<ForbiddenWordEntity[]>;
    getById(id: string): Promise<ForbiddenWordEntity | null>;
    getActive(): Promise<ForbiddenWordEntity[]>;
    private mapForbiddenWord;
    addWord(word: string): Promise<ForbiddenWordEntity>;
    removeWordById(id: string): Promise<void>;
    removeWordByName(word: string): Promise<void>;
}
export declare const forbiddenWordService: ForbiddenWordService;
//# sourceMappingURL=forbiddenWords.service.d.ts.map
export declare class DomainNameFilter {
    private forbiddenWords;
    private regex;
    constructor();
    refreshFromDB(): Promise<void>;
    private setWords;
    validate(domainName: string): boolean;
    addWord(word: string): void;
    getWords(): string[];
    initFromDB(): Promise<void>;
}
export declare const domainNameFilter: DomainNameFilter;
//# sourceMappingURL=DomainNameFilter.d.ts.map
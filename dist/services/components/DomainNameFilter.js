"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.domainNameFilter = exports.DomainNameFilter = void 0;
const forbiddenWords_service_1 = require("../forbiddenWords.service");
class DomainNameFilter {
    forbiddenWords = [];
    regex;
    constructor() {
        this.refreshFromDB();
    }
    async refreshFromDB() {
        const words = await forbiddenWords_service_1.forbiddenWordService.getActive();
        this.setWords(words.map(w => w.word));
    }
    setWords(words) {
        this.forbiddenWords = words.map(w => w.toLowerCase());
        this.regex = this.forbiddenWords.length
            ? new RegExp(this.forbiddenWords.join('|'), 'i')
            : /$^/;
    }
    validate(domainName) {
        if (!domainName || domainName.trim() === '')
            return false;
        return !this.regex.test(domainName.trim());
    }
    addWord(word) {
        if (!word || word.trim() === '')
            return;
        this.setWords([...this.forbiddenWords, word.toLowerCase()]);
    }
    getWords() {
        return [...this.forbiddenWords];
    }
    async initFromDB() {
        const words = await forbiddenWords_service_1.forbiddenWordService.getActive();
        this.setWords(words.map(w => w.word));
    }
}
exports.DomainNameFilter = DomainNameFilter;
exports.domainNameFilter = new DomainNameFilter();
//# sourceMappingURL=DomainNameFilter.js.map
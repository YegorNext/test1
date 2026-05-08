"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForbiddenWordController = void 0;
const forbiddenWords_service_1 = require("../services/forbiddenWords.service");
const DomainNameFilter_1 = require("../services/components/DomainNameFilter");
class ForbiddenWordController {
    static async addWord(req, res) {
        const { word } = req.body;
        if (!word || word.trim() === '') {
            return res.status(400).json({ error: 'word is required' });
        }
        const newWord = await forbiddenWords_service_1.forbiddenWordService.addWord(word);
        await DomainNameFilter_1.domainNameFilter.refreshFromDB();
        res.json(newWord);
    }
    static async removeWordById(req, res) {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({ error: 'id is required' });
        }
        await forbiddenWords_service_1.forbiddenWordService.removeWordById(id);
        await DomainNameFilter_1.domainNameFilter.refreshFromDB();
        res.json({ success: true });
    }
    static async removeWordByName(req, res) {
        const { word } = req.body;
        if (!word || word.trim() === '') {
            return res.status(400).json({ error: 'word is required' });
        }
        await forbiddenWords_service_1.forbiddenWordService.removeWordByName(word);
        await DomainNameFilter_1.domainNameFilter.refreshFromDB();
        res.json({ success: true });
    }
}
exports.ForbiddenWordController = ForbiddenWordController;
//# sourceMappingURL=forbiddenWord.controller.js.map
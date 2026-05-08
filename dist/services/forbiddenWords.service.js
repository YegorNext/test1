"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.forbiddenWordService = exports.ForbiddenWordService = void 0;
const prisma_1 = require("../utils/prisma");
const db_models_1 = require("@org/db-models");
class ForbiddenWordService {
    async getAll() {
        const words = await prisma_1.prisma.forbiddenWord.findMany();
        return words.map(word => this.mapForbiddenWord(word));
    }
    async getById(id) {
        const word = await prisma_1.prisma.forbiddenWord.findUnique({
            where: { id },
        });
        if (!word)
            return null;
        return this.mapForbiddenWord(word);
    }
    async getActive() {
        const words = await prisma_1.prisma.forbiddenWord.findMany({
            where: { isActive: true },
        });
        return words.map(word => this.mapForbiddenWord(word));
    }
    mapForbiddenWord(word) {
        return new db_models_1.ForbiddenWordEntity({
            ...word,
        });
    }
    async addWord(word) {
        const newWord = await prisma_1.prisma.forbiddenWord.create({
            data: {
                word,
                isActive: true,
            },
        });
        return this.mapForbiddenWord(newWord);
    }
    async removeWordById(id) {
        await prisma_1.prisma.forbiddenWord.delete({
            where: { id },
        });
    }
    async removeWordByName(word) {
        await prisma_1.prisma.forbiddenWord.delete({
            where: { word },
        });
    }
}
exports.ForbiddenWordService = ForbiddenWordService;
exports.forbiddenWordService = new ForbiddenWordService();
//# sourceMappingURL=forbiddenWords.service.js.map
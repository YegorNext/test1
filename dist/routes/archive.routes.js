"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const upload_middleware_1 = require("../middleware/upload.middleware");
const auth_middleware_1 = require("../middleware/auth.middleware");
const role_middleware_1 = require("../middleware/role.middleware");
const error_handler_1 = require("../utils/handlers/error.handler");
const archive_controller_1 = require("../controllers/archive.controller");
const router = (0, express_1.Router)();
/**
 * @swagger
 * /archive/upload:
 *   post:
 *     tags:
 *       - Archive
 *     summary: Upload one or multiple archives
 *     security:
 *       - bearerAuth: []
 *     consumes:
 *       - multipart/form-data
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               files:
 *                 type: array
 *                 items:
 *                   type: string
 *                   format: binary
 *     responses:
 *       200:
 *         description: Files uploaded
 *       400:
 *         description: Upload error
 *       401:
 *         description: Unauthorized
 */
router.post('/upload', auth_middleware_1.authMiddleware, (0, role_middleware_1.roleMiddleware)(['ADMIN', 'USER']), upload_middleware_1.upload.array('files'), (0, error_handler_1.errorHandler)(archive_controller_1.ArchiveController.upload));
/**
 * @swagger
 * /archive/download:
 *   post:
 *     tags:
 *       - Archive
 *     summary: Download multiple archives by IDs
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               ids:
 *                 type: array
 *                 items:
 *                   type: string
 *     responses:
 *       200:
 *         description: Download started
 *       404:
 *         description: Archive not found
 */
router.post('/download', auth_middleware_1.authMiddleware, (0, role_middleware_1.roleMiddleware)(['ADMIN', 'USER']), (0, error_handler_1.errorHandler)(archive_controller_1.ArchiveController.download));
/**
 * @swagger
 * /archive/delete:
 *   delete:
 *     tags:
 *       - Archive
 *     summary: Delete multiple archives by IDs
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               ids:
 *                 type: array
 *                 items:
 *                   type: string
 *     responses:
 *       200:
 *         description: Archives deleted
 *       404:
 *         description: Archives not found
 */
router.delete('/delete', auth_middleware_1.authMiddleware, (0, role_middleware_1.roleMiddleware)(['ADMIN', 'USER']), (0, error_handler_1.errorHandler)(archive_controller_1.ArchiveController.delete));
/**
 * @swagger
 * /archive/all:
 *   get:
 *     tags:
 *       - Archive
 *     summary: Get all archives for admin, or only own archives for user
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Archives list
 */
router.get('/all', auth_middleware_1.authMiddleware, (0, role_middleware_1.roleMiddleware)(['ADMIN', 'USER']), (0, error_handler_1.errorHandler)(archive_controller_1.ArchiveController.getAll));
exports.default = router;
//# sourceMappingURL=archive.routes.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_middleware_1 = require("../middleware/auth.middleware");
const role_middleware_1 = require("../middleware/role.middleware");
const error_handler_1 = require("../utils/handlers/error.handler");
const domain_controller_1 = require("../controllers/domain.controller");
const router = (0, express_1.Router)();
/**
 * @swagger
 * /domain/all:
 *   get:
 *     tags:
 *       - Domain
 *     summary: Get all domains
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Domains list
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden
 */
router.get('/all', auth_middleware_1.authMiddleware, (0, role_middleware_1.roleMiddleware)(['ADMIN', 'USER']), (0, error_handler_1.errorHandler)(domain_controller_1.DomainController.getAll));
//should be changed or removed
/**
 * @swagger
 * /domain/{id}:
 *   patch:
 *     tags:
 *       - Domain
 *     summary: Update domain
 *     security:
 *       - bearerAuth: []
 *     x-roles:
 *       - ADMIN
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Domain ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               price:
 *                 type: number
 *               hasSSL:
 *                 type: boolean
 *               campaign:
 *                 type: string
 *     responses:
 *       200:
 *         description: Domain Updated
 *       400:
 *         description: Validation error
 *       403:
 *         description: Forbidden
 *       404:
 *         description: Domain not found
 */
router.patch('/:id', auth_middleware_1.authMiddleware, (0, role_middleware_1.roleMiddleware)(['ADMIN']), (0, error_handler_1.errorHandler)(domain_controller_1.DomainController.update));
// should be removed
router.post('/validate', 
// authMiddleware,
//  roleMiddleware(['ADMIN']),
(0, error_handler_1.errorHandler)(domain_controller_1.DomainController.validateDomain));
/**
 * @swagger
 * /domain/{id}/deploy:
 *   post:
 *     tags:
 *       - Domain
 *     summary: Deploy sites
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Domain ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - archivePath
 *               - cloack
 *               - userId
 *               - campaign
 *               - allowedCountries
 *             properties:
 *               archivePath:
 *                 type: string
 *               cloack:
 *                 type: string
 *                 enum: ["PALLADIUM", "INTERNAL"]
 *                 example: "PALLADIUM"
 *               userId:
 *                 type: string
 *               campaign:
 *                 type: string
 *               allowedCountries:
 *                 type: array
 *                 items:
 *                   type: string
 *                   minLength: 2
 *                   maxLength: 2
 *                 minItems: 1
 *                 example: ["UA", "PL", "DE"]
 *               allowedOS:
 *                 type: object
 *                 additionalProperties:
 *                   type: boolean
 *                 example:
 *                   windows: true
 *                   macos: false
 *                   linux: true
 *                   android: true
 *     responses:
 *       200:
 *         description: Site deployed
 *       400:
 *         description: Validation error
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden
 *       404:
 *         description: Site not found
 */
router.post('/:id/deploy', auth_middleware_1.authMiddleware, (0, role_middleware_1.roleMiddleware)(['ADMIN', 'USER']), (0, error_handler_1.errorHandler)(domain_controller_1.DomainController.deploy));
/**
 * @swagger
 * /domain/{id}/ssl:
 *   get:
 *     tags:
 *       - Domain
 *     summary: Check SSL certificate status for a domain
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Domain ID
 *     responses:
 *       200:
 *         description: SSL certificate status
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden
 *       404:
 *         description: Domain not found
 */
router.get('/:id/ssl', auth_middleware_1.authMiddleware, (0, role_middleware_1.roleMiddleware)(['ADMIN', 'USER']), (0, error_handler_1.errorHandler)(domain_controller_1.DomainController.checkSSL));
/**
 * @swagger
 * /domain/{id}/ssl:
 *   post:
 *     tags:
 *       - Domain
 *     summary: Install SSL certificate for a domain
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Domain ID
 *     responses:
 *       200:
 *         description: SSL installation initiated
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden
 *       404:
 *         description: Domain not found
 */
router.post('/:id/ssl', auth_middleware_1.authMiddleware, (0, role_middleware_1.roleMiddleware)(['ADMIN', 'USER']), (0, error_handler_1.errorHandler)(domain_controller_1.DomainController.installSSL));
exports.default = router;
//# sourceMappingURL=domain.routes.js.map
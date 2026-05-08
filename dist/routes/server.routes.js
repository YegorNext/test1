"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_middleware_1 = require("../middleware/auth.middleware");
const role_middleware_1 = require("../middleware/role.middleware");
const error_handler_1 = require("../utils/handlers/error.handler");
const server_controller_1 = require("../controllers/server.controller");
const router = (0, express_1.Router)();
/**
 * @swagger
 * /server/create:
 *   post:
 *     tags:
 *       - Server
 *     summary: Create new server
 *     security:
 *       - bearerAuth: []
 *     x-roles:
 *       - ADMIN
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *               name:
 *                 type: string
 *               ip:
 *                 type: string
 *               rootPassword:
 *                 type: string
 *               forgePassword:
 *                 type: string
 *               price:
 *                 type: number
 *             required:
 *               - id
 *               - name
 *               - ip
 *               - rootPassword
 *               - forgePassword
 *               - price
 *     responses:
 *       200:
 *         description: Server Created
 *       400:
 *         description: Validation error
 *       403:
 *         description: Forbidden
 */
router.post('/create', auth_middleware_1.authMiddleware, (0, role_middleware_1.roleMiddleware)(['ADMIN']), (0, error_handler_1.errorHandler)(server_controller_1.ServerController.create));
/**
 * @swagger
 * /server/fetch:
 *   get:
 *     tags:
 *       - Server
 *     summary: Update server list from Forge
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: dateFrom
 *         required: true
 *         schema:
 *           type: string
 *           format: date
 *         example: 2026-02-01
 *     responses:
 *       200:
 *         description: Server list
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden
 */
router.get('/fetch', auth_middleware_1.authMiddleware, (0, role_middleware_1.roleMiddleware)(['ADMIN']), (0, error_handler_1.errorHandler)(server_controller_1.ServerController.fetch));
/**
 * @swagger
 * /server/all:
 *   get:
 *     tags:
 *       - Server
 *     summary: Get all servers
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Server list
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden
 */
router.get('/all', auth_middleware_1.authMiddleware, (0, role_middleware_1.roleMiddleware)(['ADMIN', 'USER']), (0, error_handler_1.errorHandler)(server_controller_1.ServerController.getAll));
/**
 * @swagger
 * /server/{id}:
 *   get:
 *     tags:
 *       - Server
 *     summary: Get server by id
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Server found
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden
 *       404:
 *         description: Server not found
 */
router.get('/:id', auth_middleware_1.authMiddleware, (0, role_middleware_1.roleMiddleware)(['ADMIN', 'USER']), (0, error_handler_1.errorHandler)(server_controller_1.ServerController.getServer));
/**
 * @swagger
 * /server/update/{id}:
 *   patch:
 *     tags:
 *       - Server
 *     summary: Update server
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
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               ip:
 *                 type: string
 *               rootPassword:
 *                 type: string
 *               forgePassword:
 *                 type: string
 *               price:
 *                 type: number
 *     responses:
 *       200:
 *         description: Server updated
 *       400:
 *         description: Validation error
 *       403:
 *         description: Forbidden
 */
router.patch('/update/:id', auth_middleware_1.authMiddleware, (0, role_middleware_1.roleMiddleware)(['ADMIN']), (0, error_handler_1.errorHandler)(server_controller_1.ServerController.update));
/**
 * @swagger
 * /server/assign/{id}:
 *   post:
 *     tags:
 *       - Server
 *     summary: Assign server
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Server assigned
 *       400:
 *         description: Validation error
 *       403:
 *         description: Forbidden
 *       404:
 *         description: Server not found
 */
router.post('/assign/:id', auth_middleware_1.authMiddleware, (0, role_middleware_1.roleMiddleware)(['ADMIN', 'USER']), (0, error_handler_1.errorHandler)(server_controller_1.ServerController.assign));
/**
 * @swagger
 * /server/unassign/{id}:
 *   post:
 *     tags:
 *       - Server
 *     summary: Unassign server
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Server unassigned
 *       400:
 *         description: Validation error
 *       403:
 *         description: Forbidden
 *       404:
 *         description: Server not found
 */
router.post('/assign/:id', auth_middleware_1.authMiddleware, (0, role_middleware_1.roleMiddleware)(['ADMIN']), (0, error_handler_1.errorHandler)(server_controller_1.ServerController.unassign));
/**
 * @swagger
 * /server/deactivate/{id}:
 *   post:
 *     tags:
 *       - Server
 *     summary: Deactivate Server
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
 *     responses:
 *       200:
 *         description: Server deactivated
 *       404:
 *         description: Server not found
 *       403:
 *         description: Forbidden
 */
router.post('/deactivate/:id', auth_middleware_1.authMiddleware, (0, role_middleware_1.roleMiddleware)(['ADMIN']), (0, error_handler_1.errorHandler)(server_controller_1.ServerController.deactivate));
/**
 * @swagger
 * /server/delete/{id}:
 *   delete:
 *     tags:
 *       - Server
 *     summary: Delete Server
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
 *     responses:
 *       200:
 *         description: Server deleted
 *       404:
 *         description: Server not found
 *       403:
 *         description: Forbidden
 */
router.delete('/delete/:id', auth_middleware_1.authMiddleware, (0, role_middleware_1.roleMiddleware)(['ADMIN']), (0, error_handler_1.errorHandler)(server_controller_1.ServerController.delete));
/**
 * @swagger
 * /server/{id}/domains/add:
 *   post:
 *     tags:
 *       - Server
 *     summary: Add domains to a server
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
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               domains:
 *                 type: array
 *                 items:
 *                   type: string
 *                 description: List of domains to add
 *               price:
 *                   type: number
 *     responses:
 *       200:
 *         description: Domains added to the server
 *       400:
 *         description: Validation error
 *       403:
 *         description: Forbidden
 *       404:
 *         description: Server not found
 */
router.post('/:id/domains/add', auth_middleware_1.authMiddleware, (0, role_middleware_1.roleMiddleware)(['ADMIN']), (0, error_handler_1.errorHandler)(server_controller_1.ServerController.addDomains));
/**
 * @swagger
 * /server/{id}/reboot:
 *   post:
 *     tags:
 *       - Server
 *     summary: Reboot server
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Server ID
 *     responses:
 *       200:
 *         description: Reboot initiated
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden
 *       404:
 *         description: Server not found
 */
router.post('/:id/reboot', auth_middleware_1.authMiddleware, (0, role_middleware_1.roleMiddleware)(['ADMIN', 'USER']), (0, error_handler_1.errorHandler)(server_controller_1.ServerController.rebootServer));
exports.default = router;
//# sourceMappingURL=server.routes.js.map
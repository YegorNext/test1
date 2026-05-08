"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const team_controller_1 = require("../controllers/team.controller");
const error_handler_1 = require("../utils/handlers/error.handler");
const auth_middleware_1 = require("../middleware/auth.middleware");
const role_middleware_1 = require("../middleware/role.middleware");
const router = (0, express_1.Router)();
/**
 * @swagger
 * /team/create:
 *   post:
 *     tags:
 *       - Team
 *     summary: Create new team
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
 *               name:
 *                 type: string
 *               alias:
 *                 type: string
 *             required:
 *               - name
 *     responses:
 *       200:
 *         description: Team Created
 *       400:
 *         description: Validation error
 *       403:
 *         description: Forbidden
 */
router.post('/create', auth_middleware_1.authMiddleware, (0, role_middleware_1.roleMiddleware)(['ADMIN']), (0, error_handler_1.errorHandler)(team_controller_1.TeamController.create));
/**
 * @swagger
 * /team/delete/{id}:
 *   delete:
 *     tags:
 *       - Team
 *     summary: Delete Team
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
 *         description: Team deleted
 *       404:
 *         description: Team not found
 *       403:
 *         description: Forbidden
 */
router.delete('/delete/:id', auth_middleware_1.authMiddleware, (0, role_middleware_1.roleMiddleware)(['ADMIN']), (0, error_handler_1.errorHandler)(team_controller_1.TeamController.delete));
/**
 * @swagger
 * /team/all:
 *   get:
 *     tags:
 *       - Team
 *     summary: Get all teams
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Teams list
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden
 */
router.get('/all', auth_middleware_1.authMiddleware, (0, role_middleware_1.roleMiddleware)(['ADMIN']), (0, error_handler_1.errorHandler)(team_controller_1.TeamController.getAll));
/**
 * @swagger
 * /team/{id}:
 *   get:
 *     tags:
 *       - Team
 *     summary: Get team by id
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
 *         description: Team found
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden
 *       404:
 *         description: User not found
 */
router.get('/:id', auth_middleware_1.authMiddleware, (0, role_middleware_1.roleMiddleware)(['ADMIN']), (0, error_handler_1.errorHandler)(team_controller_1.TeamController.getTeam));
/**
 * @swagger
 * /team/update/{id}:
 *   patch:
 *     tags:
 *       - Team
 *     summary: Update team
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
 *               alias:
 *                 type: string
 *     responses:
 *       200:
 *         description: User updated
 *       400:
 *         description: Validation error
 *       403:
 *         description: Forbidden
 */
router.patch('/update/:id', auth_middleware_1.authMiddleware, (0, role_middleware_1.roleMiddleware)(['ADMIN']), (0, error_handler_1.errorHandler)(team_controller_1.TeamController.update));
/**
 * @swagger
 * /team/{id}/members/add:
 *   patch:
 *     tags:
 *       - Team
 *     summary: Add members to a team
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
 *         description: Team ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               memberIds:
 *                 type: array
 *                 items:
 *                   type: string
 *                 description: List of user IDs to add
 *     responses:
 *       200:
 *         description: Members added to the team
 *       400:
 *         description: Validation error
 *       403:
 *         description: Forbidden
 *       404:
 *         description: Team not found
 */
router.patch('/:id/members/add', auth_middleware_1.authMiddleware, (0, role_middleware_1.roleMiddleware)(['ADMIN']), (0, error_handler_1.errorHandler)(team_controller_1.TeamController.addMembers));
/**
 * @swagger
 * /team/{id}/members/remove:
 *   patch:
 *     tags:
 *       - Team
 *     summary: Remove members from a team
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
 *         description: Team ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               memberIds:
 *                 type: array
 *                 items:
 *                   type: string
 *                 description: List of user IDs to remove
 *     responses:
 *       200:
 *         description: Members removed from the team
 *       400:
 *         description: Validation error
 *       403:
 *         description: Forbidden
 *       404:
 *         description: Team not found
 */
router.patch('/:id/members/remove', auth_middleware_1.authMiddleware, (0, role_middleware_1.roleMiddleware)(['ADMIN']), (0, error_handler_1.errorHandler)(team_controller_1.TeamController.removeMembers));
exports.default = router;
//# sourceMappingURL=team.routes.js.map
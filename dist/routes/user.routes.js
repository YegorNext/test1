"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/user.routes.ts
const express_1 = require("express");
const user_controller_1 = require("../controllers/user.controller");
const error_handler_1 = require("../utils/handlers/error.handler");
const auth_middleware_1 = require("../middleware/auth.middleware");
const role_middleware_1 = require("../middleware/role.middleware");
const router = (0, express_1.Router)();
/**
 * @swagger
 * /user/create:
 *   post:
 *     tags:
 *       - User
 *     summary: Create new user
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
 *               password:
 *                 type: string
 *               role:
 *                 type: string
 *                 enum: [ADMIN, USER]
 *               teamId:
 *                 type: string
 *             required:
 *               - name
 *               - password
 *               - role
 *     responses:
 *       200:
 *         description: User Created
 *       400:
 *         description: Validation error
 *       403:
 *         description: Forbidden
 */
router.post('/create', auth_middleware_1.authMiddleware, (0, role_middleware_1.roleMiddleware)(['ADMIN']), (0, error_handler_1.errorHandler)(user_controller_1.UserController.create));
/**
 * @swagger
 * /user/delete/{id}:
 *   delete:
 *     tags:
 *       - User
 *     summary: Delete User
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
 *         description: User deleted
 *       404:
 *         description: User not found
 *       403:
 *         description: Forbidden
 */
router.delete('/delete/:id', auth_middleware_1.authMiddleware, (0, role_middleware_1.roleMiddleware)(['ADMIN']), (0, error_handler_1.errorHandler)(user_controller_1.UserController.delete));
/**
 * @swagger
 * /user/all:
 *   get:
 *     tags:
 *       - User
 *     summary: Get all users
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: User list
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden
 */
router.get('/all', auth_middleware_1.authMiddleware, (0, role_middleware_1.roleMiddleware)(['ADMIN']), (0, error_handler_1.errorHandler)(user_controller_1.UserController.getAll));
/**
 * @swagger
 * /user/{id}:
 *   get:
 *     tags:
 *       - User
 *     summary: Get user by id
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
 *         description: User found
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden
 *       404:
 *         description: User not found
 */
router.get('/:id', auth_middleware_1.authMiddleware, (0, role_middleware_1.roleMiddleware)(['ADMIN', 'USER']), (0, error_handler_1.errorHandler)(user_controller_1.UserController.getUser));
/**
 * @swagger
 * /user/update/{id}:
 *   patch:
 *     tags:
 *       - User
 *     summary: Update user
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
 *               password:
 *                 type: string
 *               role:
 *                 type: string
 *                 enum: [ADMIN, USER]
 *               teamId:
 *                 type: string
 *     responses:
 *       200:
 *         description: User updated
 *       400:
 *         description: Validation error
 *       403:
 *         description: Forbidden
 */
router.patch('/update/:id', auth_middleware_1.authMiddleware, (0, role_middleware_1.roleMiddleware)(['ADMIN']), (0, error_handler_1.errorHandler)(user_controller_1.UserController.update));
/**
 * @swagger
 * /user/{id}/campaigns:
 *   patch:
 *     tags:
 *       - User
 *     summary: Add/Remove User campaigns
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
 *             required:
 *               - campaigns
 *               - remove
 *             properties:
 *               campaigns:
 *                 type: array
 *                 items:
 *                   type: string
 *               remove:
 *                 type: boolean
 *     responses:
 *       200:
 *         description: User updated
 *       400:
 *         description: Validation error
 *       403:
 *         description: Forbidden
 */
router.patch('/:id/campaigns', auth_middleware_1.authMiddleware, (0, role_middleware_1.roleMiddleware)(['ADMIN']), (0, error_handler_1.errorHandler)(user_controller_1.UserController.updateCampaigns));
exports.default = router;
//# sourceMappingURL=user.routes.js.map
import { Router } from "express";

import { allFriendZoneUsersController , createFrindZoneUserController } from "../controllers/usersController.js";

const FriendZoneUserRoutes = Router();

FriendZoneUserRoutes.get('/allUsers', allFriendZoneUsersController);
FriendZoneUserRoutes.post('/createUser', createFrindZoneUserController);


export default FriendZoneUserRoutes;
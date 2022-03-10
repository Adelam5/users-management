import express from "express";
import userCtrl from "../controllers/user.controller";
import permissionCtrl from "../controllers/permission.controller";

const router = express.Router();

router.route("/api/users").get(userCtrl.list).post(userCtrl.create);

router
  .route("/api/users/:userId")
  .get(userCtrl.read)
  .put(userCtrl.update)
  .patch(userCtrl.updateUsersPermissions)
  .delete(userCtrl.remove);

router.route("/api/permissions").get(permissionCtrl.list);

router.param("userId", userCtrl.userById);

export default router;

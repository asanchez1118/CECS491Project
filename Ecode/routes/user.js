const express = require("express");
const {
    userById,
    allUsers,
    getUser,
    updateUser,
    deleteUser
} = require("../controllers/user");
const { requireSignin } = require("../controllers/auth");


const router = express.Router();

router.get("/users", allUsers);
router.get("/user/:userID", requireSignin, getUser);
router.put("/user/:userID", requireSignin, updateUser);
router.delete("/user/:userID", requireSignin, deleteUser);

router.param("userID", userById);
module.exports = router;

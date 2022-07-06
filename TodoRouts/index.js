const Todo = require("../TodoModels/todoModul");
const Router = require("express");

const router = Router();

router.use(require("./todoRouts"));

module.exports = router;

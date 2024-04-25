var express = require('express');
var router = express.Router();

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

var frostCtrl = require("../controllers/frost");

router.get("/", frostCtrl.index);
router.get("/:id", frostCtrl.show);

module.exports = router;

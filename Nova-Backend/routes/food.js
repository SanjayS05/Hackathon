const router = require('express').Router();
const {getFood,foodDetails} = require("../controllers/food")

router.get("/getFood",getFood);
router.post("/foodDetails",foodDetails);

module.exports = router;  
const express = require('express');
const router = express.Router();
const apiproductoscontroller = require("../../controllers/api/productsController.js")



router.get("/products/:category", apiproductoscontroller.index);






module.exports = router
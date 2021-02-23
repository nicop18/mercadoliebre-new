const express = require ('express')
const router = express.Router();
const apiItemsController = require('../../controllers/api/itemsController')
const validator = require('../../middlewares/validator');



router.post('/',  apiItemsController.addToCart) 


module.exports = router;
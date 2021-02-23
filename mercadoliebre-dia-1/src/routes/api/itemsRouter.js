const express = require ('express')
const router = express.Router();
const apiItemsController = require('../../controllers/api/itemsController')
const validator = require('../../middlewares/validator');
const authMiddleware = require('../../middlewares/auth');


router.post('/',authMiddleware, validator.addToCart,  apiItemsController.addToCart) 
router.delete('/',authMiddleware, apiItemsController.deleteCart);


module.exports = router;
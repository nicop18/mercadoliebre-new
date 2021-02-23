const express = require ('express')
const router = express.Router();
const apiItemsController = require('../../controllers/api/itemsController')
const authMiddleware = require('../../middlewares/auth');
const validator = require('../../middlewares/validator');



router.post('/items', authMiddleware, validator.addToCart, apiItemsController.addToCart) //Agregar , authMiddleware, validator.addToCart
router.delete('/items', authMiddleware, apiItemsController.deleteFromCart);


module.exports = router;
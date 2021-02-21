const { validationResult } = require('express-validator');
const createError = require('http-errors');
const {Op} = require("sequelize")
// ******** Sequelize ***********

const { Product, Brand, Category } = require('../../database/models');

module.exports = {
	
	// Root - Show all products
	async index (req, res, next) {
        let category = req.params.category
        let products=[]
        console.log(category)
        if(category == "latest"){
             products = await Product.findAll(
                {
                    order: [["createdAt", "DESC"]],
                    limit: 4
                })
                console.log(products)
            return res.json(products)
        }
		else if(category == "offers"){
             products = await Product.findAll({
                where:{"discount":{ [Op.gte]: 50}}
         })
            console.log(products)
            return res.json(products)
        }    
       let respuesta = {
                meta : {
                    status : 200,
                    total: products.length,
                    url: "api/products"
                },
                data : products
            }       
            return res.json(respuesta)
        }

    }
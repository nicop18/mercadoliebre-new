const { validationResult } = require("express-validator");
const {Product, Item} = require("../../database/models");
  
  module.exports = {
  
    addToCart(req, res) {
      const errors = validationResult(req);
        console.log("hola")
      if (errors.isEmpty()) {
          console.log(req.body)
        Product.findByPk(req.body.productId, {
          include: ["user"],
        })
          .then((product) => {
              console.log(product)
            let price =
              Number(product.discount) > 0 ? product.price - (product.price * product.discount) / 100
                : product.price;

            return Item.create({
              salePrice: price,
              quantity: req.body.quantity,
              subTotal: price * req.body.quantity,
              state: 1,
              userId: req.session.user.id,
              sellerId: product.user.id,
              productId: product.id,
            });
          })
          .then(function(item){
  
            respuesta ={
    
                meta:{
                    status:201,
                    message:"Product added to cart",
 
                },
                data: item
            }
           console.log(respuesta)
           return res.json(respuesta)
        })
          
          .catch((e) => console.log(e));
      } else {
         Product.findByPk(req.body.productId, {
           include: ["user"],
         })
           .then(product => {
              return res.render('products/detail', {product, errors: errors.mapped()})
           }).catch((e) => console.log(e));
      }
    },
  
    deleteCart(req, res) {
        Item.destroy({
          where: {
            id: req.body.itemId,
          },
          force: true,
        })
        .then(response => {
            console.log(response)
          if (response > 0) {
              res.json({
                  status: 201
              })
          } else {
              console.log('error')
          }
      })
      .catch(err => {
          res.send(err.message)
      });
    }
    }
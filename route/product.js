var router = require('express').Router()
const controllers = require('../controllers')

router.post('/create' , controllers.product.create)
router.post('/get' , controllers.product.get)
router.patch('/edit' , controllers.product.edit)
router.post('/delete' , controllers.product.delete)

module.exports = router
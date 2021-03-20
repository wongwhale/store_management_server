var router = require('express').Router()
const controllers = require('../controllers')

router.post('/create' , controllers.catagory.create)
router.patch('/edit' , controllers.catagory.edit)
router.post('/delete', controllers.catagory.delete)
router.post('/get' , controllers.catagory.get)

module.exports = router
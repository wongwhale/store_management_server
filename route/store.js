var router = require('express').Router()
const controllers = require('../controllers')

router.post('/create' , controllers.store.create)
router.get('/get' , controllers.store.get)
router.patch('/edit' , controllers.store.edit)
router.post('/delete' , controllers.store.delete)

module.exports = router
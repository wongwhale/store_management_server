const router = require('express').Router()
const store = require('./store')
const product = require('./product')
const catagory = require('./catagory')

router.get('/' , (req , res ) => {
    res.send('API WORKING...')
})
router.use('/store' , store)
router.use('/product' , product)
router.use('/catagory' , catagory)

module.exports = router
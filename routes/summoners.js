const { Router } = require("express");

const router = new Router()

const asyncHandler= require('../middleware/asyncHandlerjs')
const { getChampion } = require('../controllers/summonerController')

router.get('/', asyncHandler(getChampion))

module.exports = router
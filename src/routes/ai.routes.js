const express = require('express');
const aiController=require('../controller/ai.controller.js')
const router= express.Router();


router.get('/get-response',aiController)




module.exports = router;
var express = require('express');
const { getdata, insert } = require('../controller/userController');
var router = express.Router();

/* GET home page. */
router.get('/', getdata);
router.post('/insert', insert);

module.exports = router;

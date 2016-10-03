var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
   res.render('user', {title: 'Issac',
		name: 'Issac',
		info: 'This is me. I go to school.'
   });
});

module.exports = router;

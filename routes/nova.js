var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
   res.render('user', {title: 'User Issac',
		name: 'Nova',
		info: 'This is my mom. She is really nice and I beat her in scrabble once.'
   });
});

module.exports = router;

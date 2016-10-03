var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
   res.render('user', {title: 'Josh',
		name: 'Josh',
		info: 'This is my brother. He is older than me and still lives at home.'
   });
});

module.exports = router;

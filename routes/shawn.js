var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
   res.render('user', {title: 'User Issac',
		name: 'Shawn',
		info: 'This is my dad. He owns his own company that installs solar panels.'
   });
});

module.exports = router;

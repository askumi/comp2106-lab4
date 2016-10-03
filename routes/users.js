var express = require('express');
var router = express.Router();

userlist = ['Issac', 'Josh', 'Shawn', 'Nova'];
/* GET users listing. */
router.get('/', function(req, res, next) {
   res.render('users', {title: 'User Issac',
		title: 'User List',
		userlist: userlist
   });
});

module.exports = router;

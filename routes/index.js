var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET params url and query params*/
router.get('/forms-:urlParams(\\d+)', (req, res, next) => {
  console.log(req.params.urlParams);
  console.log(req.query.level);
});

/* PUT name in form */
router.post('/forms-:urlParams(\\d+)', (req, res, next) => {
  console.log(req.body.name);
});

module.exports = router;

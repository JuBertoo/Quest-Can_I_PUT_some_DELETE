var express = require('express');
var router = express.Router();

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('Hey ! It\'s a GET');
// });

// /* GET user with ID. */
// router.get('/:id(\\d+)', function(req, res, next) {
//   res.send('Hey ! It\'s a GET with ID ' + req.params.id);
// });

// /* POST user creation. */
// router.post('/', function(req, res, next) {
//   res.send('Hey ! It\'s a POST');
// });

// /* PUT user creation. */
// router.put('/:name', function(req, res, next) {
//   let name = req.params.name;
//   res.send(`Hey ! my name is ${name}`);
// });

// /* DELETE user creation. */
// router.delete('/:id(\\d+)', function(req, res, next) {
//   let id = req.params.id;
//   res.send(`Hey it's a DELETE ID ${id}`);
// });



/*************************Quest Can I PUT some DELETE ********************/


// route (/users/[prénom]) with GET link whith form update-user.pug

router.get('/:name', function(req, res, next) {
  res.render('update-user', {user: req.params.name});
});

// Change the name with the input 
router.put('/:name', function(req, res, next) {
  res.send(`the new name is ${req.body.name}`);
});

router.get('/:id(\\d+)', (req, res) => {
  res.render('delete-user', { userId: req.params.id });
});

// Show the user in query params
router.delete('/:id(\\d+)', function(req, res, next) {
  res.send(`No more user with id ${req.params.id}`);
});



module.exports = router;



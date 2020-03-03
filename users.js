var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
  let dataArray = [
    { name: "a", age: 10},
    { name: "b", age: 11},
    { name: "c", age: 12}
  ];

  res.json({
    data: dataArray
  });

});


module.exports = router;

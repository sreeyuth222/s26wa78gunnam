var express = require('express');
var router = express.Router();

/* GET computation page. */
router.get('/', function(req, res, next) {
  let x;

  if (req.query.x) {
    x = parseFloat(req.query.x);
  } else {
    x = Math.random() * 10;
  }

  let y = Math.exp(x);

  res.send(`Math.exp applied to ${x} is ${y}`);
});

module.exports = router;
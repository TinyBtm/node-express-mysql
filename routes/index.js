var express = require('express');
var router = express.Router();
var query = require('../mysql/pool');

/* GET home page. */
router.get('/', function(req, res, next) {
  query("select * from collations", (err, result, fields) => {
    if (err) {
      console.log('[SELECT ERROR]:', err.message)
      throw err;
    }
    res.json({ success: true, data: result })
  })
});

module.exports = router;

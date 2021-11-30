var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/album', function(req, res, next) {
  const album = [
    {

      "num" : 1,
      "albumName" : "+ +",
      "track" : 1,
      "songName" : "Hi High",
      "like" : 3000,
    }
    
  ]
  //front로 보내줌
  res.json({
    album
  })
});

module.exports = router;

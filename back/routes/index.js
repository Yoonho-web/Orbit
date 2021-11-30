var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/album', function(req, res, next) {
  const song = [
    {
      "songNum" : 1,
      "songName" : "+ +",
    },
    {
      "songNum" : 2,
      "songName" : "X X",
    },
  ],
  const album = [
    {
      "number" : 1,
      "albumName" : "+ +",
      "like" : 30000
    },
    {
      "number" : 2,
      "albumName" : "HI High",
      "like" : 50000
    },
    {
      "songNum" : 2,
      "songName" : "X X",
      "number" : 1,
      "albumName" : "X X",
      "like" : 50000
    }
    
  ]
  //front로 보내줌
  res.json({
    album
  })
});

module.exports = router;

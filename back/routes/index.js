var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/album', function(req, res, next) {
  const album = [
    {
      "num" : 1,
      "image" :"1st.jpg",
      "albumName" : "+ +",
      "track" : 1,
      "songName" : "Hi High",
      "like" : 3000,
    },
    {
      "num" : 2,
      "image" :"2nd.jpg",
      "albumName" : "X X",
      "track" : 1,
      "songName" : "Butterfly",
      "like" : 7000,
    }
    
  ]
  //front로 보내줌
  res.json({
    album
  })
});

module.exports = router;

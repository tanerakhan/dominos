const express = require('express');
const router = express.Router();
const fs = require('fs')
const allFile = require("../mock.json");

router.get('/all', function(req, res, next) {
    fs.readFile(allFile, 'utf8', function(err, data){
      if(err){
        res.json({
          status: false,
          err
        })
      }
      res.json({
        status: true,
        data
      })
  });
});

router.get('/:id', function(req, res, next) {
    fs.readFile(allFile, 'utf8', function(err, data){
        console.log(data)
      /* if(err){
        res.json({
          status: false,
          err
        })
      }
      res.json({
        status: true,
        data
      }) */
  });
});

module.exports = router;

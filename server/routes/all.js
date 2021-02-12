var express = require('express');
var router = express.Router();
var fs = require('fs');

router.get('/all', function(req, res, next) {
  fs.readFile('public/data.json', 'utf8', function(err, data){
      if (err){
        res.json({
            status: false,  
            err
        })    
      }
      res.json({
        status: true,  
        data: JSON.parse(data)
    })
  });
});

router.get('/items/', function(req, res, next) {
    const { id } = req.query;
  fs.readFile('public/data.json', 'utf8', function(err, data){
      if (err){
        res.json({
            status: false,  
            err
        })    
      }
      const parseData = JSON.parse(data).pizza;
      const response = parseData.filter(item => item.id === parseInt(id))
      res.json({
        status: true,  
        details: response
    })
  });
});

module.exports = router;

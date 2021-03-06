var register = require('config/register'); 
var login = require('config/login'); 
var express = require('express');  
var mongoose = require('mongoose');
var users = require('config/models');

module.exports = function(app) {        

//sending 
     app.get('/reg.html', function(req, res) {       
          res.sendfile(__dirname + "/" + "reg.html");    
     }); 

     app.get('/login.html', function(req, res){
	  res.sendfile(__dirname + "/" + "login.html");
     });

     app.post('/login',function(req,res){        
          var email = req.body.email;             
          var password = req.body.password;       

          login.login(email,password,function (found) {           
               console.log(found);             
               res.json(found);    
     });    
     });     

     app.post('/register',function(req,res){
	  var name = req.body.name;         
          var email = req.body.email;
	  var mobile = req.body.mobile;             
          var password = req.body.password;       

          register.register(name, email, mobile, password, function (found) {             
               console.log(found);             
               res.json(found);    
     });     
     });     

	app.get('/users', function(req, res){
		users.find(function(err, users){
			if(err)
				res.send(err);
			res.json(users);			
			});
	});
};


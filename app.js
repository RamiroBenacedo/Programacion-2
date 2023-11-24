var createError = require('http-errors');
var express = require('express');
const db= require("./database/models")
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require("express-session");
const bcrypt = require('bcryptjs');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const postsRouter = require('./routes/post');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({secret:"MyApp",resave:false,saveUninitialized:true}));

app.use(function (req,res,next) {
  if (req.session.user != undefined) {
    res.locals.user = req.session.user;
    return next();
  }
  return next();
})

/*cookies*/
app.use(function (req,res,next) {
  if (req.cookies.userId != undefined && req.session.user == undefined) {
    let idUsuarioCookie = req.cookies.userId;
    
    db.Usuario.findByPk(idUsuarioCookie)
    .then (function (user) {
      req.session.user = user.dataValues;
      res.locals.user = user.dataValues;
      return next();
    })
    .catch(function(error) {
      return res.send (error);
    })
  } else {
    return next();
  }
});

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/post', postsRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

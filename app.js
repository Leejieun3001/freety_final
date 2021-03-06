var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

//routers
var index = require('./routes/index');
var users = require('./routes/users');
var login = require('./routes/login');
var signUp = require('./routes/signUp');
var duplicateCheck = require('./routes/duplicateCheck');
var loginCheck = require('./routes/loginCheck');
var postList = require('./routes/postList');
var postDetail = require('./routes/postDetail');
var search = require('./routes/search');
var searchDetail = require('./routes/searchDetail');
var letterList = require('./routes/letterList');
//var uploadPhotos = require('./routes/uploadPhotos');
var letterDetail = require('./routes/letterDetail');
var letterInsert = require('./routes/letterInsert');
var post = require('./routes/post');
var pick = require('./routes/pick');
var mypage = require('./routes/mypage');
var comment = require('./routes/comment');


//config
var config = require('./config/secretKey');




var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// set the secret key variable for jwt
app.set('jwt-secret', config.secret);


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/login', login);
app.use('/signUp', signUp);
app.use('/duplicateCheck', duplicateCheck);
app.use('/loginCheck', loginCheck);
app.use('/postList', postList);
app.use('/postDetail', postDetail);
//app.use('/uploadPhotos',uploadPhotos);
app.use('/searchDetail',searchDetail);
app.use('/search',search);
app.use('/post',post);
app.use('/mypage', mypage);
app.use('/letterList',letterList);
app.use('/pick',pick);
//app.use('/postDetail2',postDetail2);
app.use('/letterDetail',letterDetail);
app.use('/letterInsert',letterInsert);
app.use('/comment',comment);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require('express-session');


var indexRouter = require('./routes/index');
var productRouter = require('./routes/product');
var userRouter = require('./routes/user');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(session( {
   secret: "Nuestro mensaje secreto",
   resave: false,
   saveUninitialized: true
}));


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(function (req, res, next) { //permite modificar el header en todas las vistas cuando el usuario esta logueado
  if (req.session.usuarioLogueado != undefined) {
    res.locals.usuarioLogueado = req.session.usuarioLogueado;
  }
  next();
});

app.use(express.static(path.join(__dirname, 'public')));

// middleware configuracion de session 
app.use(session({
  secret: "myapp",
  resave: false,
  saveUninitialized: true
}));

// middleware de session hacia Vistas
app.use(function(req, res, next) {
  // que quiero hacer en cada ida y vuelta 
  if ( req.session.user != undefined) {
        res.locals.user = req.session.user;
  }
  return next();
});

// middleware de Cookies hacia Vistas
app.use(function(req, res, next) {
  // que quiero hacer en cada ida y vuelta 

  if (req.cookies.user != undefined && req.session.user == undefined) {
    res.locals.user = req.cookies.user;
    req.session.user = req.cookies.user;
  }

  return next();
  })

app.use('/', indexRouter);
app.use('/product', productRouter);
app.use('/user', userRouter);

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

// Library default express
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var sassMiddleware = require('node-sass-middleware');

// Libray nodejs
const cors = require('cors')
const fs = require('fs')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session);

/**
 * Config
 */
require('dotenv').config()
const database = require('./vendors/mongoose.vendor')

/**
 * Init app
 */
var app = express()

/**
 * Connect database
 */
database.connect()
app.use(session({
  secret: process.env.SESSION_KEY,
  resave: true,
  saveUninitialized: false,
  cookie: {
    maxAge: 3600000 * 4 // 4 hour
  },
  store: new MongoStore({
      mongooseConnection: database.db
  })
}));

/**
 * Config Library
 */
//enables cors
var whitelist = ['https://saladci.com']
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

// app.all('*', cors(corsOptions), function(req, res, next) {
//   next();
// })

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(sassMiddleware({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  indentedSyntax: true, // true = .sass and false = .scss
  sourceMap: true
}));
app.use(express.static(path.join(__dirname, 'public')));

/**
 * Route
 */
 // Get list router
fs.readdirSync(path.join(__dirname, './routes')).map(file => {
  require('./routes/' + file)(app)
})

fs.readdirSync(path.join(__dirname, './jobs/run')).map(file => {
  require('./jobs/run/' + file)
})

/**
 * Error handlers
 */
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  if (err.status === 401 && !err.message) {
    err.message = "Truy cập của bạn không được cấp phép";
  }
  
  if (err.status === 500) {
    err.message = "Server hiện xảy ra sự cố, xin vui lòng thử lại sau";
  }

  res.status(err.status || 500);
  res.json(err);
});

module.exports = app;

const createError = require('http-errors');
const express = require('express');
const logger = require('morgan');

const mongoose = require('mongoose');

mongoose.plugin(schema => {
  schema.statics.isObjectId = id => id && /^[0-9a-fA-F]{24}$/.test(id);
});

mongoose.connect('mongodb://localhost/markdown', {useNewUrlParser: true});
mongoose.set('useFindAndModify', false);

const indexRouter = require('./routes/index');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/', indexRouter);

app.use(function (req, res, next) {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  const status = !err.status ? 500 : err.status;
  res.status(status)
    .json({
      message: err.message,
      error: req.app.get('env') === 'development' ? err : {},
      status: status
    });
});

module.exports = app;

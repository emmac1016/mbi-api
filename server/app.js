import cookieParser from 'cookie-parser';
import express from 'express';
import generateRouter from './routes/generate';
import indexRouter from './routes/index';
import logger from 'morgan';
import path from 'path';
import verifyRouter from './routes/verify';

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));

app.use('/', indexRouter);
app.use('/generate', generateRouter);
app.use('/verify', verifyRouter);

export default app;

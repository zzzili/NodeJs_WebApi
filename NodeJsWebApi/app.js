'use strict';

console.log('Hello world');
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');

const app = new Koa();
const controller = require('./controller');
// parse request body:
app.use(bodyParser());
// add controller:
app.use(controller());
app.listen(5000);
console.log('app started at port 5000...');

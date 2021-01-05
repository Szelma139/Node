
const promise = require('bluebird'); // or any other Promise/A+ compatible library;

const initOptions = {
    promiseLib: promise // overriding the default (ES6 Promise);
};

const pgpro = require('pg-promise')(initOptions);



const cn = {
    host: '127.0.0.1',
    port: 5432,
    database: 'new',
    user: 'postgres',
    password: 'radek2',
    max:30,
};

const p = 'postgres://postgres:radek2@localhost:5432/new';

const db = pgpro(cn);


exports.db = db;
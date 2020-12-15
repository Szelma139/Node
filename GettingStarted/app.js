const http = require('http');

const hostname = '127.0.0.1';
const port = 4000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

const names = ["John", "Mary",  "Bob"];

const greet2 = name => console.log(`Hello ${name}`);

const greet =  names.map((name)=> {
	return console.log(`Hello ${name}`);
});

const name = (firstName, lastName, callback) => {
const fullname = `${firstName} ${lastName}`;
console.log(fullname);
console.log(typeof callback);
if (typeof callback === 'function') console.log("OK"); else console.log("dupa");
	callback(fullname);
};


name("john","alpha",greet2);
name("john","alpha",greet);


server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

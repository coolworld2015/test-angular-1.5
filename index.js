//npm install node-static
//node server.js

var static = require('node-static');

var file = new static.Server('.');

require('http').createServer(function (request, response) {
    request.addListener('end', function () {
        file.serve(request, response);
    }).resume();
}).listen(8000);

console.log('Server is running on 8000');
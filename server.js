const { createServer } = require('node:http');
const port = 3000,
      fs = require('fs');

const server = createServer((req, res) => {
    if (req.url === "/") {
        sendFile(res, 'index.html');
    }
});

server.listen(process.env.PORT || port);

const sendFile = function( response, filename ) {
   fs.readFile( filename, function( err, content ) {
     response.end( content, 'utf-8' );
   });
};
// Server setup

const http = require("http");
const fs = require("fs");
// Set port
const PORT = 4040;
// Create server
const server = http.createServer(handleRequest);

// Generic function to handle requests and responses
function handleRequest(req, res) {

    // // Here we use the fs package to read our index.html file
    //     fs.readFile(__dirname + "/index.html", function(err, data) {

    //     // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
    //     // an html file.
    //     res.writeHead(200, { "Content-Type": "text/html" });
    //     res.end(data);
    // });

  // Send the below string to the client when the user visits the PORT URL
  response.end("It Works!! Path Hit: " + request.url);
}

// Start server
server.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});
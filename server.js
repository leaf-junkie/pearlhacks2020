////////////////////////////////////////////////////////////////////////
// Server 
////////////////////////////////////////////////////////////////////////
const http = require("http");
const fs = require("fs");
// Set port
const PORT = 4040;
// Create server
const server = http.createServer(handleRequest);

// Generic function to handle requests and responses
function handleRequest(req, res) {
  // Saving the request data as a variable
  var requestData = "";
  // When the server receives data...
  req.on("data", function(data) {
    // Add it to requestData.
    requestData += data;
  });

  // When the request has ended...
  req.on("end", function() {
    // Log (server-side) the request method, as well as the data received!
    console.log("You did a", req.method, "with the data:\n", requestData);
    res.end();
  });
}

// Start server
server.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});
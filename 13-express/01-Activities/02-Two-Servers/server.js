// Require/import the HTTP module
const http = require("http");

// Define a port to listen for incoming requests
const PORT1 = 7000;
const PORT2 = 7500;

// Create a generic function to handle requests and responses
function handleRequest(request, response) {
  // Send the below string to the client when the user visits the PORT URL
  response.end("It Works!! Path Hit: " + request.url);
}

// Create a generic function to handle requests and responses
function handleRequest2(request, response) {
    // Send the below string to the client when the user visits the PORT URL
    response.end("ICE is broken");
  }
// Use the Node HTTP package to create our server.
// Pass the handleRequest function to empower it with functionality.
const server = http.createServer(handleRequest);
const server2 = http.createServer(handleRequest2);


// Start our server so that it can begin listening to client requests.
server.listen(PORT1, () => {

  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT1);
});

server.listen(PORT2, () => {

    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT2);
  });
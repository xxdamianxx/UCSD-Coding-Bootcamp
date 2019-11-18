// Require/import the HTTP module
const http = require("http");

// Define a port to listen for incoming requests
const PORT = 7000;
const PORT2 = 7500;

// Create a generic function to handle requests and responses
function handleRequest(request, response) {

  // Send the below string to the client when the user visits the PORT URL
  response.end("You can do it!");
}

function handleRequest2(request, response) {

    // Send the below string to the client when the user visits the PORT URL
    response.end("Yes, you got this!");
  }

// Use the Node HTTP package to create our server.
// Pass the handleRequest function to empower it with functionality.
const server = http.createServer(handleRequest);
const server2 = http.createServer(handleRequest2);

// Start our server so that it can begin listening to client requests.
server.listen(PORT, () => {

  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});

server2.listen(PORT2, () => {
    console.log("Server listening on: http://localhost:" + PORT2);
})
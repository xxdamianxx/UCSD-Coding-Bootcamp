// Dependencies
const http = require("http");
const fs = require("fs");

// Set our port to 8080
const PORT = 8080;

// Create our server
const server = http.createServer(handleRequest);

// Create a function for handling the requests and responses coming into our server
function handleRequest(req, res) {

  const url = req.url;
  console.log(url);

  switch (url) {
    case "/":
      return getHomePage(res);
    case "/foods":
      return getFoodsPage(res);
    case "/movies": 
      return getMoviesPage(res);
    case "/frameworks":
      return getFrameworksPage(res);
    default: 
      return get404Page(res)
  }

}

function getHomePage(res) {
  fs.readFile(__dirname + "/index.html", (err, data) => {
    if (err) throw err;
    // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
    // an html file.
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  });
}

function getFoodsPage(res) {
  fs.readFile(__dirname + "/foods.html", (err, data) => {
    if (err) throw err;
    // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
    // an html file.
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  });
}

function getMoviesPage(res) {
  fs.readFile(__dirname + "/movies.html", (err, data) => {
    if (err) throw err;
    // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
    // an html file.
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  });
}

function getFrameworksPage(res) {
  fs.readFile(__dirname + "/frameworks.html", (err, data) => {
    if (err) throw err;
    // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
    // an html file.
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  });
}

function get404Page(res) {
  const html = "<html><body><h1>404 Page!</h1></body></html>";
  res.writeHead(404, { "Content-Type": "text/html" })
  res.end(html);
}

// Starts our server
server.listen(PORT, () => {
  console.log("Server is listening on PORT: " + PORT);
});
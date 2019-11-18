const http = require("http");
const fs = require("fs");
const PORT = 8080;

const server = http.createServer(handleRequest);

// Start our server
server.listen(PORT, () => {
    // Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:" + PORT);
});

// Create a function which handles incoming requests and sends responses
function handleRequest(req, res) {

    // Capture the url the request is made to
    var path = req.url;

    // Depending on the URL, display a different HTML file.
    switch (path) {

        case "/":
            // return displayRoot(res);
            fs.readFile(__dirname + "/index.html", (err, data) => {
                if (err) throw err;
                // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
                // an html file.
                res.writeHead(200, { "Content-Type": "text/html" });
                res.end(data);
            });
            break;

        case "/foods":
            return displayFoods(res);

        default:
            return display404(path, res);
    }
}
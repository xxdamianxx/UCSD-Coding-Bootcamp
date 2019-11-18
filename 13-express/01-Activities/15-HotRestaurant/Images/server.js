// Dependencies
// =============================================================
const express = require("express");
const path = require("path");

// Sets up the Express App
// =============================================================
const app = express();
const PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Starts the server to begin listening
// =============================================================
app.listen(PORT, () => {
    console.log("App listening on PORT " + PORT);
});

const table = [
    {
        Name: "jack",
        Number: "6194552132",
        Email: "jackmaster@gmail.com",
        ID: "jackmaster",
    }
];

const waitlist = [
    {
        Name: "John",
        Number: "6194552132",
        Email: "johnhappy@gmail.com",
        ID: "johncryaz",
    }
];

app.get("/", (req, res) => {
    // res.send("Welcome to the home idex Page!")
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/view", (req, res) => {
    // res.send("Welcome to the view Page!")
    res.sendFile(path.join(__dirname, "view.html"));
});

app.get("/rez", (req, res) => {
    // res.send("Welcome to the reservation Page!")
    res.sendFile(path.join(__dirname, "rez.html"));
});

//making connection from server.js to the object in html also makes data aavliable to the user if they ask for it
app.get("/api/tables", (req, res) => {
    return res.json(table);
});

app.get("/api/waitlist", (req, res) => {
    return res.json(waitlist);
});

app.post("/api/tables", (req, res) => {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newrez = req.body;

    console.log(newrez);

    // We then add the json the user sent to the character array
    if (table.length < 5) {
        table.push(newrez);
    }
    else {
        waitlist.push(newrez);
    }

    // We then display the JSON to the users
    res.json(newrez);
});
// Super Hero Selector App

// Database full of Super Heroes 


const mysql = require("mysql");
const inquirer = require("inquirer");
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "heroDB"
});

connection.connect(err => {
    if (err) throw err;
    runSearch();
});

function runSearch() {
    connection.query("SELECT * FROM heroes", (err, data) => {
        if (err) throw err;
        console.table(data);
        inquirer
            .prompt({
                type: "list",
                message: "What would you like to do?",
                name: "choice",
                choices: ["create hero", "update hero", "delete hero", "exit"]
            }).then(answer => {
                switch (answer.choice) {
                    case "create hero":
                        return createHero();
                    case "update hero":
                        return updateHero(data);
                    case "delete hero":
                        return deleteHero();
                    default:
                        connection.end();
                }
            });
    });
}

function createHero() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "What's your heroes name?",
                name: "name"
            },
            {
                type: "input",
                message: "What's your heroes power?",
                name: "power"
            },
            {
                type: "input",
                message: "What's your heroes strength?",
                name: "strength"
            }
        ]).then(answers => {
            connection.query("INSERT INTO heroes SET ?", answers, (err, data) => {
                if (err) throw err;
                runSearch();
            });
        });
}

function updateHero(data) {
    inquirer.prompt({
        type: "input",
        message: "Select hero you want to update by id",
        name: "heroId"
    }).then(answer => {
        // console.log(answer.heroId);
        let heroSelect;
        // console.log(typeof answer.heroId, typeof data[0].id)
        for (let i = 0; i < data.length; i++) {
            if (data[i].id === parseInt(answer.heroId)) {
                heroSelect = data[i];
            }
        }

        inquirer
            .prompt({
                type: "input",
                message: "For the hero of " + heroSelect.name + " update strength value to",
                name: "strength"
            }).then(answer => {
                // if the user sets the hero's strength 
                // greater then it's original value 
                // then update the table 
                if (answer.strength < heroSelect.strength) {
                    console.log("Strength given is less then current strength. No update allowed");
                    runSearch();
                } else {
                    // otherwise update the table
                    connection.query("UPDATE heroes SET ? WHERE id = ?", [answer, heroSelect.id], (err, data) => {
                        if (err) throw err;
                        runSearch();
                    });
                }
            });

        // console.log(heroSelect);

    });
}

function deleteHero() {
    inquirer.prompt({
        type: "input",
        message: "Select hero you want to delete by id",
        name: "id"
    }).then(answer => { 
        connection.query("DELETE FROM heroes WHERE id = ?", [answer.id], (err, data) => {
            if(err) throw err;
            console.log(data);
            runSearch();
        });
    });
}

// Show all heroes from the table
// name - String
// power - String
// strength - Number

// Select hero by Id 
// Update the hero 

// Maybe: Add a hero
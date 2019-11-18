const mysql = require("mysql");
const inquirer = require("inquirer");

const connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "password",
  database: "top_songsDB"
});

connection.connect(err => {
  if (err) throw err;
  runSearch();
});

function runSearch() {
  inquirer
    .prompt({
      name: "action",
      type: "list",
      message: "What would you like to do?",
      choices: [
        "Find songs by artist",
        "Find all artists who appear more than once",
        "Find data within a specific range",
        "Search for a specific song",
        "Find song and album released in the same year by artist",
        "exit"
      ]
    })
    .then(answer => {
      switch (answer.action) {
        case "Find songs by artist":
          artistSearch();
          break;

        case "Find all artists who appear more than once":
          multiSearch();
          break;

        case "Find data within a specific range":
          rangeSearch();
          break;

        case "Search for a specific song":
          songSearch();
          break;

        case "Find song and album released in the same year by artist":
          findSongAndAlbumByArtist();
          break;

        case "exit":
          connection.end();
          break;
      }
    });
}

function artistSearch() {
  inquirer
    .prompt({
      name: "artist",
      type: "input",
      message: "What artist would you like to search for?"
    }).then(answer => {
      // console.log(answer);
      // SELECT * FROM top5000 WHERE artist = "The Beatles";
      connection.query("SELECT * FROM top5000 WHERE ?", answer, (err, data) => {
        if (err) throw err;
        console.table(data);
        runSearch();
      });
    });
}

function multiSearch() {
  // SELECT artist FROM top5000 GROUP BY artist HAVING COUNT(*) > 1;
  connection.query("SELECT artist FROM top5000 GROUP BY artist HAVING COUNT(*) > 1", (err, data) => {
    if(err) throw err;
    console.table(data);
    runSearch();
  });
}

function rangeSearch() {
  //   SELECT * FROM top5000 WHERE position BETWEEN 1 AND 10;
  // what the starting position 
  // what the ending poistion
  inquirer
    .prompt([
      {
        type: "input",
        name: "start",
        message: "Enter a starting position"
      },
      {
        type: "input",
        name: "end",
        message: "Enter ending position"
      }
    ]).then(answer => {
      // console.log(answer);
      connection.query("SELECT * FROM top5000 WHERE position BETWEEN ? AND ?", 
        [answer.start, answer.end], (err, data) => {
          if(err) throw err;
          console.table(data);
          runSearch();
        });
    });
}

function songSearch() {
  // SELECT * FROM top5000 WHERE song = "Umbrella";
  inquirer
    .prompt({
      type: "input",
      message: "What song would you like to search for?",
      name: "song"
    }).then(answer => {
      connection.query("SELECT * FROM top5000 WHERE ?", answer, (err, data)=> {
        if(err) throw err;
        console.table(data);
        runSearch();
      });
    });
}

function findSongAndAlbumByArtist() {
  inquirer.prompt({
    type: "input",
    message: "Find artist",
    name: "artist"
  }).then(answer => {
    
    const artist = answer.artist;
    
    let query = "SELECT top_albums.year, top_albums.album, top_albums.position, top5000.song, top5000.artist"; 
    query += " FROM top_albums";
    query += " INNER JOIN top5000 ON (top_albums.artist = top5000.artist AND top_albums.year = top5000.year)";
    query += " WHERE top_albums.artist = ? AND top5000.artist = ?";
    
    connection.query(query, [artist, artist], (err, data) => {
      if(err) throw err;
      console.table(data);
      runSearch();
    });
  });
}
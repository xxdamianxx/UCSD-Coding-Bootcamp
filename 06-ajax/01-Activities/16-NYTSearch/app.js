

function newYorkTimesQuery(search) {
    // New York Times API URL
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + search + "&api-key=iYAUiAmWy6bzPzErV7d59bWHVwD2VExP";

    // AJAX call to NYT API
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
    });
}

newYorkTimesQuery("banana");

// make an array of celebs names
var celebs = ["Jack Black", "Taylor Swift", "Jim Carry", "Steve Carrell", "Azis", "Nina Dobrev"];

function renderButtons() {
    for (var i = 0; i < celebs.length; i++) {
        console.log(celebs[i]);
        var btn = $("<button>");
        btn.addClass("btn btn-success celeb-btn");
        btn.attr("data-celeb", celebs[i]);
        btn.text(celebs[i]);
        $("#btn-container").append(btn);
    }
}
renderButtons();

function getAndDisplayGifs(name) {
    var queryUrl = "https://api.giphy.com/v1/gifs/search?api_key=U2y9lCNxvkeys2pimFFcZa4kTgDPbrfU&q=" + name + "&limit=25&offset=0&rating=G&lang=en";

    $.ajax({
        url: queryUrl,
        method: "GET"
    }).then(function (response) {
        var gifs = response.data;
        $("#gif-container").empty();
        for (var i = 0; i < gifs.length; i++) {
            var img = $("<img>");
            img.addClass("giphy-image");
            img.attr("src", gifs[i].images.original.url);
            img.attr("alt", name);
            $("#gif-container").append(img);
        }
    });
}

$(document).on("click", ".celeb-btn", function () {
    var name = $(this).attr("data-celeb");
    getAndDisplayGifs(name);
});

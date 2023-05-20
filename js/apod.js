$(document).ready(
    function () {
        $("#view_button").click(getPicture);
    });
function getPicture() {
    $.ajax({
        url: "https://api.nasa.gov/planetary/apod",
        type: "GET",
        data: {
            api_key: "Ar0slwQxekBVpMi4fFtXmooqdthgEOEvQ94OdREI",
            date: $("#date").val()
        },
        dataType: "json",
        "success": showPicture,
        "error": noPicture
    });
};
function showPicture(data) {
    $("h3").text(data.title);
    $("#pic").attr("src", data.url);

};
function noPicture(error) {
    alert(error.responseText);
};
$(document).ready(
    function () {
        $("#view_button").click(getPicture);
    });
const params = new URLSearchParams();
params.append('api_key', 'Ar0slwQxekBVpMi4fFtXmooqdthgEOEvQ94OdREI');
params.append('date', $("#date").val());
const url = `https://api.nasa.gov/planetary/apod${params.toString}`;

function getPicture() {
    fetch(url)
        .then(showPicture)
        .catch(noPicture)
};

function showPicture(data) {
    $("h3").text(data.title);
    $("#pic").attr("src", data.url);

};
function noPicture(error) {
    alert(error.responseText);
};
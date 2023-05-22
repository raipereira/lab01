$(document).ready(
    function () {
        $("#view_button").click(getPicture);
    });


function getPicture() {
    const apiKey = 'Ar0slwQxekBVpMi4fFtXmooqdthgEOEvQ94OdREI';
    const params = new URLSearchParams();
    params.append('api_key', apiKey);
    params.append('date', $("#date").val());
    const url = `https://api.nasa.gov/planetary/apod?${params.toString()}`;
    fetch(url)
    .then(response => {
        if (!response.ok) {
          throw new Error('Error: ' + response.status);
        }
        return response.json();
      })
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
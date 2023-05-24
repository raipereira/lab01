$(document).ready(() => {
  $('#div-result').hide();
    $('#lookup-btn').click(() => {
      const word = $('#word-input').val();
      $.ajax({
        url: `http://localhost:3000/lookup/${word}`,
        method: 'GET',
        success: (data) => {
          $('#results').empty();
          if (data.length === 0) {
            $('#results').text('No definitions found.');
            $('#div-result').hide();
          } else {
           // const olElement = document.createElement('li');
            data.forEach((definition) => {
              const type = definition.wordtype;
              const meaning = definition.definition;
              $('#div-result').show();
              $('#results').append(`<li><strong>(${type})::</strong> ${meaning}</li>`);
            });
          }
        },
        error: (xhr, status, error) => {
          console.error(error);
          $('#results').text('An error occurred. Please try again.');
        },
      });
    });
  });
  
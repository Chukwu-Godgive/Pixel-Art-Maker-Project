// Pixel table table making

function makeGrid() {
  let w, h;
  w = $('#inputWidth').val();
  h = $('#inputHeight').val();
  // This is for table rows
  for(tr=1; tr<=h; tr++) {
    $('#pixelCanvas').append('<tr></tr>');
  }
 // This is for table columns
  for(td=1; td<=w; td++){
    $('tr').append('<td></td>');
  }
}

//  This is for Submit button
$('#sizePicker').submit(function(e) {
  e.preventDefault();
  let tr = $('#pixelCanvas').find('tr');
  tr.remove();
  makeGrid();
});

// Aplying color to td's background
$('#pixelCanvas').on('click','td', function(e) {
  let color = $('#colorPicker').val();
  $(e.target).css('background-color', color);
});
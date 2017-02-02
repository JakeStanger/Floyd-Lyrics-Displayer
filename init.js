$(document).ready(function ()
{
  var data = $.getJSON("PinkFloydDiscography.json", function(data) {
    console.log(data);
    for(var key in data) console.log(data[key]);
  });
});

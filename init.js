$(document).ready(function ()
{
  var data = $.getJSON("PinkFloydDiscography.json", function(data) {
    for(album in data)
    {
      document.write("<h2>" + album + "</h2>");
      albumData = data[album];
      for(song in albumData.songs)
      {
        document.write("<h3>" + albumData.songs[song].songName + "</h3>");
        var lyrics = albumData.songs[song].lyrics.replace(/(?:\r\n|\r|\n)/g, '<br />');
        document.write("<p>" + lyrics + "</p>");
      }
    }
  });
});

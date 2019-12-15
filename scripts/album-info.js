
  var x = 1;
let y = 1;

if (true) {
  var x = 2;
  let y = 2;
}

console.log(x);
// expected output: 2

console.log(y);
// expected output: 1


$('#album-title').text(album.title);
$('h2.artist').text(album.artist);
$('img#album-cover-art').attr('src', album.albumArtUrl);
$('#release-info').text(album.releaseInfo);

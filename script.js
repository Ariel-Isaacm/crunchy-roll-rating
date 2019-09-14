var aboutDiv = document.getElementById("showmedia_about_media");
var h4s = aboutDiv.getElementsByTagName("h4");
var title = h4s[0].getElementsByTagName("a")[0].innerText;
var episode = h4s[1].innerText.replace(new RegExp('Season \\d, ', 'gm'),'');
console.log("title:"+title);
console.log("episode:"+episode);

const request = new XMLHttpRequest();
const url='https://www.omdbapi.com/?t='+title+'&'+episode.replace(' ','=')+'&apikey=PlzBanM3';
request.open("GET", url);

request.send();

request.onreadystatechange = (e) => {
  if (request.responseText !== '' && !document.getElementById('imdbRating')) {
      var response = JSON.parse(request.responseText);
      aboutDiv.innerHTML = aboutDiv.innerHTML +'<h1 id="imdbRating">IMDB Rating: '+response.imdbRating+'</h1>';
  }
}

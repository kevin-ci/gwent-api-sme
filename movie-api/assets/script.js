const apiKey = "8229f396";
const result = document.getElementById("result");
const button = document.getElementById("button");
const input = document.getElementById("input");

function handleButtonClick() {
    let filmName = input.value;
    let url = `https://www.omdbapi.com/?t=${filmName}&apikey=${apiKey}`;
    fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      showData(data);
    });
}
button.addEventListener('click', handleButtonClick);

function showData(data) {
  let title = data.Title;
  let year = data.Year;
  let director = data.Director;
  let imgUrl = data.Poster;
  let runtime = data.Runtime;
  let genre = data.Genre;
  let cast = data.Actors;
  let plot = data.Plot;
  let id = data.imdbID;
  let rating = data.imdbRating;

  let htmlTemplate = `
    <h1>${title}</h1>
    <p>${year}</p>
    <p>${director}</p>
    <img src="${imgUrl}">
    <p>${runtime}; ${genre}</p>
    <p>${cast}</p>
    <p>${plot}</p>
    <p><a href="https://www.imdb.com/title/${id}/" target="_blank">IMDb</a> rating: ${rating} / 10</p>
`;

  result.innerHTML = htmlTemplate;
}

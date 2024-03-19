document.getElementById('getJokeBtn').addEventListener('click', getJoke);

function getJoke() {
  fetch('https://api.chucknorris.io/jokes/random')
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch joke');
      }
      return response.json();
    })
    .then(data => {
      displayJoke(data.value);
    })
    .catch(error => {
      console.error('Error fetching joke:', error);
      displayJoke('Oops! Failed to fetch joke. Please try again later.');
    });
}

function displayJoke(joke) {
  const jokeDisplay = document.getElementById('jokeDisplay');
  jokeDisplay.textContent = joke;
}

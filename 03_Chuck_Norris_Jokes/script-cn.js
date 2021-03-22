const jokeValue = document.getElementById('joke-value');
const genQuoteBtn = document.getElementById('gen-quote-btn');

function randomJoke() {
    fetch('https://api.chucknorris.io/jokes/random')
    .then(response => response.json())
    .then(data => {
        jokeValue.textContent = data.value;
  });
};

randomJoke();
genQuoteBtn.addEventListener('click', () => {
    randomJoke();
});

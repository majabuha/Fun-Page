const jokeValue = document.getElementById('joke-value');
const genQuoteBtn = document.getElementById('gen-quote-btn');

function randomQuote() {
    fetch('https://api.chucknorris.io/jokes/random')
    .then(response => response.json())
    .then(data => {
        jokeValue.textContent = data.value;
  });
};

randomQuote();
genQuoteBtn.addEventListener('click', () => {
    randomQuote();
});
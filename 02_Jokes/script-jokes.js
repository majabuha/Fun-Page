const jokeSetup = document.getElementById('joke-setup');
const jokeType = document.getElementById('joke-type');
const jokePunchline = document.getElementById('joke-punchline');
const genQuoteBtn = document.getElementById('gen-quote-btn');

function randomJoke() {
    fetch('https://official-joke-api.appspot.com/jokes/random')
    .then(response => response.json())
    .then(data => {
        jokeSetup.textContent = data.setup;
        jokeType.textContent = data.type;
        jokePunchline.textContent = data.punchline;
  });
};

randomJoke();
genQuoteBtn.addEventListener('click', () => {
    randomJoke();
});

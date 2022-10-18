const project = 'random-quote-machine';

var colors = [
  '#16a085',
  '#27ae60',
  '#2c3e50',
  '#f39c12',
  '#e74c3c',
  '#9b59b6',
  '#FB6964',
  '#342224',
  '#472E32',
  '#BDBB99',
  '#77B1A9',
  '#73A857'
];

const generateQuote = () => {
    const randQuote = Math.floor(Math.random() * QUOTEBANK.length);
    document.getElementById('text').innerText = QUOTEBANK[randQuote].quote;
    document.getElementById('author').innerText = QUOTEBANK[randQuote].author;


const color = Math.floor(Math.random() * colors.length);

$('body, h1, .footer, #wrapper, .button').animate(
    {
    backgroundColor: colors[color]
    }
)

$('.quote-text, #wrapper, .quote-author').animate(
    {
    color: colors[color]
    }
);
}
const quotes = [
{
    name: 'Muhammad Ali',
    quote: 'I am America. I am the part you wont recognize. But get used to me. Black, confident, cocky; my name, not yours; my religion, not yours; my goals, my own; get used to me.'
},
{
    name: 'Frederick Douglass',
    quote: 'I prefer to be true to myself, even at the hazard of incurring the ridicule of others, rather than to be false, and to incur my own abhorrence.'
},
{
    name: 'Harriet Tubman',
    quote: 'Every great dream begins with a dreamer. Always remember, you have within you the strength, the patience, and the passion to reach for the stars to change the world'
},
{
    name: 'Martin Luther King Jr.',
    quote: 'Almost always, the creative dedicated minority has made the world better.'
},
{
    name: 'Maya Angelou',
    quote: 'I have learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.'
},
{
    name: 'Malcolm X',
    quote: 'The future belongs to those who prepare for it today.'
},
{
    name: 'Nelson Mandela',
    quote: 'I learned that courage was not the absence of fear, but the triumph over it.'
},
{
    name: 'Muhummad Ali',
    quote: 'I am the greatest, I said that even before I knew I was.'
}
];

const quoteButton = document.querySelector('.quote-button');
const quote = document.querySelector('#quote');
const authorOfQuote = document.querySelector('.author');

function generateQuote(){
    let number = Math.floor(Math.random()* quotes.length);
    quote.innerHTML = quotes[number].quote;
    authorOfQuote.innerHTML = quotes[number].name;
}

quoteButton.addEventListener('click', generateQuote);
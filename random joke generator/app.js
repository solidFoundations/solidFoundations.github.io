const jokes  = [
    {
        joke: 'What do you call an angry carrot?',
        punchline: 'A steamed veggie!'
},
{
    joke: 'Why did the coffee mug file a police report?',
    punchline: 'It got mugged!'
},
{
    joke: 'What kind of shoes do breadsticks wear?',
    punchline: 'Loafers!'
},
{
    joke: 'Why shouldn’t you trust trees?',
    punchline: 'They seem kind of shady!'
},
{
    joke: 'Why did the tomato turn red?',
    punchline: 'Because it saw the salad dressing!'
},
{
    joke: 'What do you call a fake noodle?',
    punchline: 'An impasta!'

}
];

const jokeButton = document.querySelector('.joke-button');
const jokeText = document.querySelector('#joke');
const punchlineText = document.querySelector('.punchline');

function generateJoke(){
    let number = Math.floor(Math.random()* jokes.length);
    jokeText.innerHTML = jokes[number].joke;
    punchlineText.innerHTML = jokes[number].punchline;
 
}



jokeButton.addEventListener('click', generateJoke);

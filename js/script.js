/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Constructs the array of quote objects
const quotes = [
  {
    quote: "Things need not have happened to be true. Tales and dreams are the shadow-truths that will endure when mere facts are dust and ashes, and forgot.",
    source: "Neil Gaiman",
    citation: "Dream Country",
    year: 1991,
    genre: "Fantasy"
  },
  {
    quote: "I think it's impossible to really understand somebody, what they want, what they believe, and not love them the way they love themselves.",
    source: "Orson Scott Card",
    citation: " Ender's Game ",
    year: 1985,
    genre: "Science fiction"
  },
  {
    quote: "Never let your sense of morals prevent you from doing what is right.",
    source: "Isaac Asimov",
    citation: "Foundation",
    year: 1951,
    genre: "Science fiction"
  },
  {
    quote: "The Answer to the Great Question... Of Life, the Universe and Everything... Is... Forty-two,' said Deep Thought, with infinite majesty and calm.",
    source: "Douglas Adams",
    citation: "The Hitchhiker's Guide to the Galaxy",
    year: 1979,
    genre: "Science fiction"
  },
  {
    quote: "It's a dangerous business, Frodo, going out your door. You step onto the road, and if you don't keep your feet, there's no knowing where you might be swept off to.",
    source: " J.R.R. Tolkien",
    citation: "The Lord of the Rings",
    year: 1955,
    genre: "Fantasy"
  },
  {
    quote: "Every era puts invisible shackles on those who have lived through it, and I can only dance in my chains.",
    source: "Liu Cixin",
    citation: "The Three-Body Problem ",
    year: 2008,
    genre: "Science fiction"
  }
]

console.log(quotes)
// DOM Element to have background change color
const body = document.getElementsByTagName("body")[0];
// DOM Element to have interactive innnerHTML
const quoteBox = document.getElementById("quote-box");
// Creates the curreentQuoteGenre Variable
let currentQuoteGenre = ""


// Creates a funciton to get a random number and pull a single object from the quotes array with the index of that random number
const getRandomQuote = () => {
  let randNum = 0
  do {
    randNum = Math.floor(Math.random() * quotes.length)
  }
  while (quotes[randNum].genre === currentQuoteGenre);
  return quotes[randNum] 
}

// Creates a funciton to generate a random color
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


// Creates the printWuote funciton to create the HTML to be displayed and displays it in the quoteBox element
const printQuote = () => {
  let chosenQuote = getRandomQuote()
  let displayHTML = ""
  
    //Constructs the displayHTML variable to include values from the chosenQuote object
    displayHTML = 
      `<p class="quote">${chosenQuote.quote} </p>
      <p class="source">${chosenQuote.source}`
    // Checks if a citation property exits in the chosenQuote object and includes it in the HTML if it does
    if  (chosenQuote.citation) {
      displayHTML += `<span class="citation">${chosenQuote.citation}</span>`
    }
      // Checks if a year property exits in the chosenQuote object and includes it in the HTML if it does
    if (chosenQuote.year) {
      displayHTML += `<span class="year">${chosenQuote.year.toString()}</span>`
    }
    // Adds closing paragraph tag
    displayHTML += `</p>`

    // Sets quotebox to the HTML in the displayHTML variable
    quoteBox.innerHTML = displayHTML
    // Sets background to random color
    body.style.backgroundColor = `${getRandomColor()}`

    //Sets currentQuoteGenre to the new quote genre once quote has been printed
    currentQuoteGenre = chosenQuote.genre
}

// Sets new quote at page load
printQuote()

// Generates a new quote every 20 seconds
setInterval(() => {
  printQuote()
}, 20000)


// Event Listener to run printQuote function when clicking the loadQuote Button
document.getElementById('loadQuote').addEventListener("click", printQuote, false);


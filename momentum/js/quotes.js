const quotes = [
  { quote: "Quotes No1", author: "Author No1" },
  { quote: "Quotes No2", author: "Author No2" },
  { quote: "Quotes No3", author: "Author No3" },
  { quote: "Quotes No4", author: "Author No4" },
  { quote: "Quotes No5", author: "Author No5" },
  { quote: "Quotes No6", author: "Author No6" },
  { quote: "Quotes No7", author: "Author No7" },
  { quote: "Quotes No8", author: "Author No8" },
  { quote: "Quotes No9", author: "Author No9" },
  { quote: "Quotes No10", author: "Author No10" },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

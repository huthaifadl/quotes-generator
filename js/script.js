const quotes = [
  {
    author: "Muhammad Ali",
    quoteText:
      "“When a man says I cannot, he has made a suggestion to himself. He has weakened his power of accomplishing that which otherwise would have been accomplished.”",
  },
  {
    author: "The Prophet Muhammad ﷺ",
    quoteText:
      "“Do good deeds properly, sincerely and moderately and know that your deeds will not make you enter Paradise, and that the most beloved deed to Allah is the most regular and constant even if it were little.”",
  },
  {
    author: "Nouman Ali Khan",
    quoteText:
      "“It is when things are at their worst that Allah will raise the best generation. The generation that the Prophet would be told Sahabat should look up to. So maybe the fact that you are living in the darkest of time means that Allah thinks you can be the strongest source of light.”",
  },
  {
    author: "Abu Hamid al-Ghazali",
    quoteText:
      "“a man should say to his soul every morning, God has given thee twenty-four treasures; take heed lest thou lose anyone of them, for thou wilt not be able to endure the regret that will follow such loss”",
  },
  {
    author: "Nouman Ali Khan",
    quoteText:
      "“What you desire is what you want, what you have is what Allah wants”",
  },
];

let lastIndex = -1;


function changeQuote () {
  let randomIndex;

  do {
    randomIndex = Math.floor(quotes.length * Math.random())
  } while (randomIndex === lastIndex);

  const randomQuote = quotes[randomIndex];
  document.getElementById("quoteTextP").innerHTML = randomQuote.quoteText;
  document.getElementById("quoteAuthor").innerHTML = `— ${randomQuote.author}`;

  lastIndex = randomIndex;
}
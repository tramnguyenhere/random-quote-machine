import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Quotes = () => {
  const [quote, setQuote] = useState('title');
  const [author, setAuthor] = useState('');

  const fetchQuote = async () => {
    const response = await axios
      .get(
        'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'
      )
      .catch((err) => {
        console.log('Err', err);
      });
    let dataQuotes = response.data.quotes;
    let randomNum = Math.floor(dataQuotes.length * Math.random());
    let randomQuote = dataQuotes[randomNum];
    setQuote(randomQuote.quote);
    setAuthor(randomQuote.author);
  };

  const handleClick = () => {
    fetchQuote();
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div id='quote-box'>
      <div id='text'>
        <p>{quote}</p>
      </div>
      <div id='author'>
        <p>{author}</p>
      </div>
      <div id='buttons'>
        <div className='social-media'>
          <a
            href={`https://twitter.com/intent/tweet?text="${quote}"-${author}`}
            id='tweet-quote'
          >
            <span>
              <i class='fa-brands fa-twitter'></i>
            </span>
          </a>
        </div>
        <button onClick={handleClick} id='new-quote'>
          New Quote
        </button>
      </div>
    </div>
  );
};

export default Quotes;

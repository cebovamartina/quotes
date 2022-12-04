import '../App.css';
import React from 'react';
import {useState, useEffect} from "react";
import ReactDOM from "react-dom/client";
import Index from "../index";


function RandomQuote() {
    const [quote, setQuote] = useState([]);
    useEffect(() => {
        quotes()
    }, [])
    const quotes = async () => {
        const response = await fetch('https://type.fit/api/quotes');
        setQuote(await response.json())
    }
    const [randomQuote, setRandomQuote] = useState(['It is impossible for a man to learn what he thinks he already knows.Epictetus']);
    const getQuote = () => {
        // console.log(quote[Math.floor(Math.random() * quote.length)]);
        let random = quote[Math.floor(Math.random() * quote.length)];
        setRandomQuote([random.text, random.author]);
        console.log(randomQuote);
    }

    const getHomePage = () => {
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<Index/>)

    }

    return (
        <div className="randomQuote">

            <h1>Your random quote:</h1>
            <div class="quote">
                {randomQuote}
            </div>
            <button
                onClick={() => getHomePage()}
                type="primary">
                Home Page
            </button>
            <button
                onClick={() => getQuote()}
                type="primary">
                New Quote
            </button>


        </div>
    );
};
export default RandomQuote;
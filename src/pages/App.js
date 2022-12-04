import '../App.css';
import React from 'react';
import RandomQuote from "./RandomQuote";
import {useState, useEffect} from "react";
import ReactDOM from "react-dom/client";


function App() {
    const [quote, setQuote] = useState([]);
    useEffect(() => {
        quotes()
    }, [])
    const quotes = async () => {
        const response = await fetch('https://type.fit/api/quotes');
        setQuote(await response.json())
    }

    const getRandomQuote = () => {
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<RandomQuote/>)

    }
    return (
        <div className="allQuotes">

            <h1>Quotes:</h1>
            <button
                onClick={() => getRandomQuote()}
                type="primary">
                Random Quote
            </button>

            <table>
                {quote.map((data, key) => {
                        return (
                            <div>
                                <tr>
                                    <th>ID</th>
                                    <th>Quote</th>
                                    <th>Author</th>
                                </tr>
                                <tr>
                                    <td>{key}</td>
                                    <td>{data.text}</td>
                                    <td>{data.author}</td>
                                </tr>
                            </div>
                        )
                    }
                )}
            </table>
        </div>
    );
};
export default App;
import "./index.css";
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

const main = () => {
    return (
        <div>
            <h1>Main</h1>
            <button><Link to= '/t1' className="links">t1</Link></button>
            <button><Link to= '/t2' className="links">t2</Link></button>
        </div>
    )
}

export default main;
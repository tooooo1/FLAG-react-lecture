import React from 'react';
import { BrowserRouter, BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import T1 from './t1';
import T2 from './t2';
import Header from './Header';
import Main from './main';

const App = () => {
    return (
        
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Main/>}></Route>
                    <Route path='/t1' element={<T1/>}></Route>
                    <Route path='/t2' element={<T2/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;
import './App.css';
import './Main.js';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ReturnPage from './ReturnPage';
import NotFound from './NotFound';
import Main from './Main';

const App = () => {
  return (
    <BrowserRouter>
      <Main />
      <Routes>
        <Route path='/' element={<Main />}></Route>
        <Route path='/main.thumbnailUrl' element={<ReturnPage />}></Route>
        <Route path='/*' element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

import './App.css';
import Home from './pages/home';
import News from './pages/news';
import Plansandservices from './pages/plans and services';
import Contact from './pages/contact';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/'  element={<Home />}/>
      <Route path='/noticias'  element={<News />}/>
      <Route path='/planoseservicos'  element={<Plansandservices />}/>
      <Route path='/contato'  element={<Contact />}/>
    </Routes>
  );
}

export default App;

import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/navbar-index';
import Home from './pages/home/home-index';
import Favorites from './pages/favorites/favorites-index';
import Details from './pages/details/details-index';

function App() {
  return (
    <div>
      <div className='min-h-screen p-6 bg-white text-gray-600 text-lg'>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/recipe-item/:id" element={<Details />} />
          </Routes>
      </div>
    </div>
  );
}

export default App;

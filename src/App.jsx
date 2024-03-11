import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Main } from './pages/start/Main';
import { Catalog } from './pages/catalog';
import { Search } from './pages/search';
import { FullAnime } from './pages/FullAnime';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/catalog' element={<Catalog />} />
          <Route path='/search' element={<Search />} />
          <Route path='/:id' element={<FullAnime />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

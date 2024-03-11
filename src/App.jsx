import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Main } from './pages/start/Main';
import { Catalog } from './pages/catalog';
import { Search } from './pages/search';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/catalog' element={<Catalog />} />
          <Route path='/search' element={<Search />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

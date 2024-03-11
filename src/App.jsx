import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Main } from './pages/start/Main';
import { Catalog } from './pages/catalog';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/catalog' element={<Catalog />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

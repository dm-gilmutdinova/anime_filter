import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Main } from './pages/start/Main';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Main />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

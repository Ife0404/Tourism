// App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../UI/Components/Pages/Home/Home';
import Categories from '../UI/Components/Pages/Categories/Categories';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={Home} />
        <Route path="/categories" element={Categories} />
        {/* Other routes */}
      </Routes>
    </Router>
  );
}

export default App;

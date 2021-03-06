import './App.css';
import Header from './components/Header'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects'

function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;

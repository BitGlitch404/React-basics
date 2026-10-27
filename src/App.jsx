import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home.jsx';
import About from './About.jsx';
import { useState} from 'react';

const Nav = () => {
  return (
    <nav style={{ padding: '10px 0', display: 'flex', gap: '15px' }}>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </nav>
  );
};

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

const App = () => {
  return (
    <BrowserRouter>

      <Nav />
      <Counter />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
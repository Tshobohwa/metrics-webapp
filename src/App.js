import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import Details from './routes/Details';
import NotMatch from './routes/NotMatch';

const App = () => (
  <main>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details" element={<Details />} />
      <Route path="*" element={<NotMatch />} />
    </Routes>
  </main>
);

export default App;

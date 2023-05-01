import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import Details from './routes/Details';
import NotMatch from './routes/NotMatch';

const App = () => (
  <main>
    <h2 className="font-1">Hello world</h2>
    <h2 className="font-2">Hello world</h2>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details" element={<Details />} />
      <Route path="*" element={<NotMatch />} />
    </Routes>
  </main>
);

export default App;

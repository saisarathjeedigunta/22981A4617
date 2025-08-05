import { Routes, Route } from 'react-router-dom';
import Shortner from './components/Shortner';
import List from './components/List';
import Redirect from './components/Redirect';

const App = () => (
  <Routes>
    <Route path="/" element={<Shortner />} />
    <Route path="/list" element={<List />} />
    <Route path="/:shortcode" element={<Redirect />} />
  </Routes>
);

export default App;

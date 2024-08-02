import { Route, Routes } from 'react-router-dom';
import './App.css';
import { NotFoundPage } from './pages/not-found-page';
import { MainPage } from './pages/main-page';
import { SinglePage } from './pages/single-page';

function App() {
  return (
    <Routes>
      <Route path='/' index element={<MainPage />} />
      <Route path='/name/:name' element={<SinglePage />} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;

import { Route, Routes } from 'react-router-dom';
import './App.css';
import { AppContent } from './components/app-content/app-content';
import { NotFoundPage } from './pages/not-found-page';
import { CountryDescription } from './components/country-description/country-description';

function App() {
  // return <AppContent />;
  return (
    <Routes>
      <Route path='/' index element={<AppContent />}></Route>
      <Route path='/name/:name' element={<CountryDescription />} />
      <Route path='*' element={<NotFoundPage />}></Route>
    </Routes>
  );
}

export default App;

import { useEffect } from 'react';
import './App.css';
import { getData } from './api/api';

function App() {
  useEffect(() => {
    console.log(getData());
  });

  return <></>;
}

export default App;

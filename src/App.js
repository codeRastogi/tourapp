import { useState } from 'react';
import './App.css';
import Tours from './components/Tours';
import data from './data';

const App = () =>{

  const [tours, setTours] = useState(data);

  return (
    <div>
      <Tours tours= {tours}></Tours>
    </div>
  )
}

export default App;

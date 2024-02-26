import { useState } from 'react';
import './App.css';
import Tours from './components/Tours';
import data from './data';

const App = () =>{

  const [tours, setTours] = useState(data);
  function removeTour(id){
   const newTour =  tours.filter(tour=> tour.id !== id);
    setTours(newTour);
  }
  return (
    <div>
      <Tours tours= {tours} removeTour = {removeTour}></Tours>
    </div>
  )
}

export default App;

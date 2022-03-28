import './App.css';

import * as React from 'react'
import Card from './components/Card';
import Header from './components/Header';

function App() {
  let [data, setData] = React.useState({})

React.useEffect(function() {
  fetch ("https://api.nasa.gov/planetary/apod?api_key=DqQITaM5PKo6ufuOgLlITZ32R4p3SScky7hzyORV")
  .then(res => res.json())
  .then(data => setData(data))
}, []) 
  return (
    <div>
      <Header />
      <ol></ol>
      <Card photo={ data }/>
    </div>
  );
}

export default App;

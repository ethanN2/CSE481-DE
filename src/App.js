import React, {useEffect} from 'react';
import './Component/Route/Route';
import './App.css';
import Routes from './Component/Route/Route';

function App() {

  useEffect(() => {
  document.title = "E4U"
  }, []);
  
  return (
    <div className="App" >
      <Routes />
    </div>
  );
}

export default App;

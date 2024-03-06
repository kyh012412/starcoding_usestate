import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [time,setTime] = useState(1);

  return (
    <div>
      <span>현재 시각: {time} 시</span>
      <button onClick={()=>{
        setTime(time==23? 0:time+1);
      }}>Update</button>
    </div>
  );
}

export default App;

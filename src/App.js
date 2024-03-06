import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [myArray,setMyArray] = useState([]);
  const handleClick = () =>{
    const inputTag = document.querySelector('input');
    console.log(inputTag);
    setMyArray([...myArray,inputTag.innerText])
  }

  return (
    <div>
      <input type="text" />
      <button onClick={handleClick}>Upload</button>
      {myArray.forEach((value,idx)=>{
        (<h1>{value}</h1>)
      })}
    </div>
  );
}

export default App;

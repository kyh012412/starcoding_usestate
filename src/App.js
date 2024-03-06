import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [myArray,setMyArray] = useState(['테스트1','테스트2']);
  const [input,setInput] = useState('');

  const handleInput = (e) =>{
    setInput(e.target.value);
  }
  const handleClick = () =>{
    //prevState : 업데이트 하기전의 값을 가지고 있음
    setMyArray((prevState)=>{
      return [input,...prevState];
    })
    setInput('');
  }

  return (
    <div>
      <input type="text" value={input} onChange={handleInput}/>
      <button onClick={handleClick}>Upload</button>
      {myArray.map((value,idx)=>{
        return (<p key={idx}>{value}</p>)
      })}
    </div>
  );
}

export default App;

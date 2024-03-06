import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const heavyWork = () =>{
  console.log('엄청 무거운 작업 !!!');
  return ['테스트1','테스트2'];
}

function App() {
  // 이 안의 초기세팅은 계속 불려질때마다 실행되므로
  // 별개의 효율적인 방법이 필요  
  const [myArray,setMyArray] = useState(()=>{
    return heavyWork();
  });
  const [input,setInput] = useState('');

  const handleInput = (e) =>{
    setInput(e.target.value);
  }
  const handleClick = () =>{
    //prevState : 업데이트 하기전의 값을 가지고 있음
    setMyArray([input,...myArray])
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

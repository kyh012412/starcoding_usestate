# useState에 관하여
##
setState로 상태를 변경할수 있다.
변경할때마다 state가 변경될때마다 새로 랜더링된다.
##
새로변경할 state값이 이전 state값과 연관이 있다면
이전 상태를 매개변수로 하는 콜백함수를 넣어주는 것이 좋다.
```js
setState((prevState)=>{
  //some works..
  return newState;
});
```
##
useState를 사용해서 무거운일을 해야한다면
콜백함수로 인자를 넣어주면 맨처음 랜더링될때만 실행하게할수있다.
```js
useState(()=>{
  return heavyWorks();
})
```
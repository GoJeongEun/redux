import { useSelector, useDispatch } from 'react-redux';
import {creactStore} from 'redux';
import {provider} from 'react-redux';
import Counter from '../components/Counter';
import { increase, decrease, setDiff} from '../modules/counter';



function Counter1() {

  const { number, diff } = useSelector(state => ({
    number: state.counter.number,
    diff: state.counter.diff
  }));

  // useDispatch 는 리덕스 스토어의 dispatch 를 함수에서 사용 할 수 있게 해주는 Hook 입니다.
  const dispatch = useDispatch();
  // 각 액션들을 디스패치하는 함수들을 만드세요
  const onIncrease = () => dispatch(increase());
  const onDecrease = () => dispatch(decrease());
  const onSetDiff = diff => dispatch(setDiff(diff));

  return (
    <div style={main}>
      <h1 style={h1Style}>{number}</h1>
      {/* <p style={Title}> You clicked {count} times</p>
      <button style={btnStyle} onClick={() => setCount(count + 1)}>
        Click +1
        </button>
      <button style={btnStyleR} onClick={() => setCount(count - 1)}>
        Click -1
        </button> */}
        <input type="number" value={diff} min="1" onChange="{onChange}" />
        <button style={btnStyle} onClick={onIncrease}>+1</button>
        <button style={btnStyleR} onClick={onDecrease}>-1</button>
    </div>
  );
}


const btnStyle = {
  color: "white",
  border: "1px solid #ececec",
  background: "#ff0000",
}
const h1Style = {
  color:"white",
}

const btnStyleR = {
  color: "white",
  border: "1px solid #ececec",
  background: "#178277",
}

const Title = {
  fontSize: "1.5rem",
  color: "white",
}

const main = {
  padding: "5%",
  width: "80%",
  margin: "0 auto",
  background: "#523e03",
}

export default Counter1
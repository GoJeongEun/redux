import { useSelector, useDispatch } from 'react-redux';
import Counter from '../components/Counter';
import { increment, decrement, setDiff} from '../modules/countertwo';

function Counter2(){
  const {number, diff} = useSelector(state => ({
    number:state.countertwo.number,
    diff: state.countertwo.diff
  }));

    const dispatch = useDispatch();
    const onincrement = () => dispatch(increment());
    const ondecrement = () => dispatch(decrement());
    const onSetDiff = diff => dispatch(setDiff(diff));

  return (
    <div style={main}>
      <p style={Title}> NEW PAGE !! </p>
      <p style={Title}> You clicked {number} times</p>
      <button style={btnStyle} onClick={onincrement}>
        +5
        </button>
      <button style={btnStyleR} onClick={ondecrement}>
         -5
        </button>
    </div>
  );
}

const btnStyle = {
  color: "white",
  padding: "1%",
  border: "1px solid #ececec",
  background: "#ff0000",
  fontSize: "1.25rem",
}
const btnStyleR = {
  color: "white",
  padding: "1%",
  border: "1px solid #ececec",
  background: "#178277",
  fontSize: "1.25rem",
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
export default Counter2
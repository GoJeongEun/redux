import React from 'react';
import Counter from '../components/Counter';
import { useSelector, useDispatch } from 'react-redux';
import  { increment, decrement} from '../modules/countertwo';


function CounterContainer() {
    //useSelector는 리덕스 스토어의 상태를 조회하는 Hook입니다.
    //state의 값은 store.getState() 함수를 호출했을 때
    // 나타나는 결과물과 동일
    const { number, diff } = useSelector(state => ({
        number: state.counter.number,
        diff: state.counter.diff
    }));

    //useDispatch는 리덕스 스토어의 dispatch를 함수에서 사용 
    //할 수 있게 해주는 Hook입니다.
    const dispatch = useDispatch();
    //각 액션들을 디스패치하는 함수 만들기! 
    const onIncrement = () => dispatch(increment());
    const onDecrement = () => dispatch(decrement());

    return (
        <countertwo 
        //상태와
        number={number}
        diff={diff}
        //액션을 디스패치 하는 함수들을 props로 넣어준다
        onIncrement={onIncrement}
        onDecrement={onDecrement}
        />
    );
}

export default CounterContainer;
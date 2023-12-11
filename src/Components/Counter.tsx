import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../State/store";
import { decrement, increment, incrementByAmount } from "../State/Counter/counterSlice";

const Counter = () => {
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div>
            <h2>{count}</h2>
            <div>
                <button onClick={() => dispatch(increment())}>Increment</button>
                <button onClick={() => dispatch(decrement())}>Decrement</button>
                <button onClick={()=> dispatch(incrementByAmount(10))}>Increment by 10</button>
            </div>
        </div>
    );
};

export default Counter;


import {useDispatch} from "react-redux";

import {increseCount, decreseCount, paloadIncrease} from "./store/slices/upDown"
import { fetchFakeData } from "./store/slices/apiFatch";

function Button() {
const dispatch=useDispatch();

const increseCountFun=()=>{
  dispatch(increseCount());
}
const decreseCountFun=()=>{
  dispatch(decreseCount());
}
const payloadCountFun=()=>{
  dispatch(paloadIncrease(20));
}

const fetchFun=async()=>{
  dispatch(fetchFakeData('https://jsonplaceholder.typicode.com/todos/'));
}

  return (
    <>
      <button
      onClick={increseCountFun}
        style={{ backgroundColor: "green", margin: "50px", fontSize: "40px" }}
      >
        incrise
      </button>
      <button
      onClick={decreseCountFun}
        style={{ backgroundColor: "red", margin: "50px", fontSize: "40px" }}
      >
        decrise
      </button>

      <button
      onClick={payloadCountFun}
        style={{ backgroundColor: "gray", margin: "50px", fontSize: "40px" }}
      >
        payload 20
      </button>

      <button
      onClick={fetchFun}
        style={{ backgroundColor: "yellow", margin: "50px", fontSize: "40px" }}
      >
        fatchFake Data
      </button>
    </>
  );
}

export default Button;


import { useSelector } from "react-redux";

function CountBar() {
  const count=useSelector((state)=>{
    return state.upDown;
  })
    return (
      <>
        <div style={{ fontSize: "50Px", backgroundColor: "blue" }}> {count}</div>
      </>
    );
  }
  
  export default CountBar;
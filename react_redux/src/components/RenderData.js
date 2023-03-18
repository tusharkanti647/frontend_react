
import { useSelector } from "react-redux"

function RenderData(){

const data=useSelector((state)=>{
    return state.fetchFake.entities;
});

//data.splice(10);
//if(data.length>10){
    //console.log(data.length);
//data.splice(10);
//}
//console.log(typeof data);



    return(<>
    <div style={{ fontSize: "50Px", backgroundColor: "blue" }} >fatch data titel render</div>
    <ul>{data.map((element, ind)=><li kry={ind} style={{width:"500px", backgroundColor:"yellow", margin:"50Px", fontSize:"30px"}}>{element.title}</li>)}
    </ul>
    </>)
}

export default RenderData;
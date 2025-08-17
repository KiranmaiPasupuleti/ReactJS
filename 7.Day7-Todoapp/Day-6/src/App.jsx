import  { useState } from "react";
import Timer from "./component/Timer";
import Todos from "./component/Todos";

const App = () => {
  const [showTimer, setShowTimer] = useState(true);
  return (
    // <>
    //   {showTimer && <Timer />}
    //   <button onClick={() => setShowTimer(!showTimer)}>
    //     {showTimer ? "Hide Timer" : "show Timer"}
    //   </button>
    // </>
    <>
    <div style={{height:"100vh"}}>
      
      {showTimer && <Timer />}
       <button onClick={() => setShowTimer(!showTimer)}>
         {showTimer ? "Hide Timer" : "show Timer"}
       </button>
     
    </div>
      <div style={{height:"100vh"}}>
        <Todos />
      </div>
    </>
  );
};

export default App;

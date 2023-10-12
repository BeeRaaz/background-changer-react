import { useState } from "react";
import "./index.css";

const App = () => {

  const [color, setColor] = useState("lavender");

  return (
    <div className="w-full h-screen" 
    style={{backgroundColor: color}}>

      <div className="flex flex-wrap fixed top-20 justify-center px-5 rounded-xl inset-x-0">
        <div className="flex flex-wrap justify-center gap-5 rounded-xl bg-white px-3 py-2">
          <button onClick={() => setColor("red")} className="px-3 py-1 rounded-xl text-white" style={{backgroundColor: "red"}}>Red</button>
          <button onClick={() => setColor("green")} className="px-3 py-1 rounded-xl text-white" style={{backgroundColor: "green"}}>Green</button>
          <button onClick={() => setColor("yellow")} className="px-3 py-1 rounded-xl text-black" style={{backgroundColor: "yellow"}}>Yellow</button>
          <button onClick={() => setColor("blue")} className="px-3 py-1 rounded-xl text-white" style={{backgroundColor: "blue"}}>Blue</button>
          <button onClick={() => setColor("lavender")} className="px-3 py-1 rounded-xl text-black" style={{backgroundColor: "lavender"}}>Lavender</button>
          <button onClick={() => setColor("black")} className="px-3 py-1 rounded-xl text-white" style={{backgroundColor: "black"}}>Black</button>
        </div>
      </div>
    </div>
  )
 

}

export default App;

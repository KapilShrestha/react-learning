import {useState} from "react"

function App() {
  const [color, setColor] = useState("white")

  return (
    <div className="w-full h-screen duration-200" style = {{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2"> 
      <div className="flex flex-wrap justify-center gap-4 shadow-lg bg-white p-4 rounded-lg">
        <button onClick={()=> setColor("red")} className="outline-none px-4 py-1 rounded-lg shadow-lg bg-red-600 text-white" >Red</button>
        <button onClick={()=> setColor("green")} className="outline-none px-4 py-1 rounded-lg shadow-lg bg-green-600 text-white">Green</button>
        <button onClick={()=> setColor("blue")} className="outline-none px-4 py-1 rounded-lg shadow-lg bg-blue-600 text-white">Blue</button>


      </div>
      </div>
    
    
    </div>
  )
}

export default App

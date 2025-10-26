 import { useState } from "react"
import Squars from "./Squar"
import { Name } from "./Squar"
 
 export default function Tictac(){
   const[x,setx] = useState([])
   const[xtrue, setxtrue] = useState(true)
   const handelCl =(i) => {
     if(x[i]) return;
    const updat = [...x]
     if(!xtrue){
       updat[i]="O"
       setx(updat)
       setxtrue(true)
        
     }
     else{
      updat[i]="X"
      setx(updat)
      setxtrue(false)
       
     }
   }
     const reloadPage = () => {
      window.location.reload()
     }
   
    return(
      <>
  <div className="w-full h-[100vh] flex justify-center items-center p-4 sm:p-6 md:p-8">
    <div className=" p-3 sm:p-6 md:p-8 rounded-xl shadow-lg flex flex-col items-center gap-3 sm:gap-4 md:gap-6">
      
      {/* Top Section - Button */}
      <div className="bg-cyan-800 flex items-center justify-center w-full py-3 sm:py-4 md:py-5 rounded-lg">
        <button
          onClick={reloadPage}
          className="
            border border-gray-700 
            px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 
            bg-black text-white font-bold rounded-lg 
            hover:bg-gray-800 hover:scale-105 
            transition-all duration-200 ease-in-out
            text-sm sm:text-base md:text-lg 
            shadow-md 
          "
        >
          Play Again
        </button>
      </div>

      {/* Tic Tac Toe Board */}
      <div className="flex flex-col gap-2 sm:gap-3 md:gap-4">
        <div className="flex gap-2 sm:gap-3 md:gap-4">
          <Squars value={x[0]} Clicked={() => handelCl(0)} />
          <Squars value={x[1]} Clicked={() => handelCl(1)} />
          <Squars value={x[2]} Clicked={() => handelCl(2)} />
        </div>
        <div className="flex gap-2 sm:gap-3 md:gap-4">
          <Squars value={x[3]} Clicked={() => handelCl(3)} />
          <Squars value={x[4]} Clicked={() => handelCl(4)} />
          <Squars value={x[5]} Clicked={() => handelCl(5)} />
        </div>
        <div className="flex gap-2 sm:gap-3 md:gap-4">
          <Squars value={x[6]} Clicked={() => handelCl(6)} />
          <Squars value={x[7]} Clicked={() => handelCl(7)} />
          <Squars value={x[8]} Clicked={() => handelCl(8)} />
        </div>
      </div>

      {/* Footer or Player Name */}
      <div className="mt-4 sm:mt-6 md:mt-8 text-center w-full">
        <Name />
      </div>
    </div>
  </div>
</>


    )
}
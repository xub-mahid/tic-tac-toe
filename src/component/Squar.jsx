export default function Squars({value,Clicked}){

    return(
        <>
        <div>
           <div
  onClick={Clicked}
  className="
    border-2 bg-black text-white font-extrabold text-2xl 
    flex justify-center items-center
    w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] md:w-[120px] md:h-[120px] lg:w-[150px] lg:h-[150px]
    cursor-pointer rounded-xl transition-all duration-200 hover:bg-gray-800
  "
>
  {value}
</div>

        </div>

        </>
    )
}


export  function Name (){
  return(
    <>
  <p className="text-center  text-gray-700 
  text-sm sm:text-base md:text-lg lg:text-xl font-medium 
  px-2 sm:px-4">
  Developed by <span className="text-red-600 font-semibold">@Mohammad Mahid</span>
</p>

    </>
  )
}
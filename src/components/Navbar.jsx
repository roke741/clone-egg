import React from "react";

function Navbar({title, subtitle, actionNext, actionPrevious}) {
  return (
    <nav className="mb-5">
      <div className="flex items-center w-100	min-h-[70px] gap-5 py-3 px-7 bg-white rounded-xl shadow-md shadow-slate-800/20 ">
        <div className="font-sm">
          <svg 
            className="h-4" 
            role="img" xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 512 512" style={{color: "rgb(21, 192, 175)"}}>
              <path fill="currentColor" d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM297 385c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l71-71L120 280c-13.3 0-24-10.7-24-24s10.7-24 24-24l214.1 0-71-71c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L409 239c9.4 9.4 9.4 24.6 0 33.9L297 385z"></path></svg>
          
        </div>
        
        <div className="grid grid-flow-col items-center gap-3 mr-auto max-w-fit">
          <h4 className="text-lg font-bold m-0 truncate ">{title}</h4>
          <svg 
            className="h-3" 
            role="img" xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 320 512">
              <path fill="currentColor" d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"></path>
              </svg>
          <p className="text-lg font-[500] text-sky-500 m-0 truncate ">{subtitle}</p>  
        </div>
        <div className="flex gap-1">
          <button 
          onClick={actionPrevious}
          className="hover:bg-gray-200 ">
            <svg 
            className="h-4"  
            role="img" xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 320 512">
              <path fill="currentColor" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"></path>
            </svg>
          
          </button>

          <button 
          onClick={actionNext}
          className="hover:bg-gray-200 ">
            <svg 
            className="h-4" 
            role="img" xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 320 512">
              <path fill="currentColor" d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"></path>
              </svg>
          </button>
        </div>
      
      </div>
    </nav>
  );
}

export default Navbar;

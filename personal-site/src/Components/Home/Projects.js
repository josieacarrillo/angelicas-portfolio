import React from 'react';
import { Link } from 'react-router-dom';

function Projects (){
    return (
         <div className="flex flex-col text-left justify-between pt-8 relative">
             <div className="grid grid-cols-1 gap-12 md:gap-5 md:grid-cols-3 items-start">

             </div>
             <div className="relative w-full mt-2">
               <a href="/portfolio">
                 <div className="mt-8 max-w-sm md:max-w-2xl border border-fun-pink mx-auto text-center w-full whitespace-nowrap px-8 py-3 rounded-full text-fun-pink bg-fun-pink-darkerer hover:bg-fun-pink hover:text-white transition-colors cursor-pointer">
                   View All
                 </div>
               </a>
             </div>
           </div>
    )
}

export default Projects;
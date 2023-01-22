import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons'

function Companies (){
    return (
         <div className="relative w-full mt-2 p-8">
                         <div className="text-3xl font-medium text-slate-800 mt-8 max-w-sm md:max-w-2xl mx-auto text-center w-full whitespace-nowrap px-8 py-3 rounded-full text-fun-pink bg-fun-pink-darkerer  transition-colors cursor-pointer">
                           Companies
                         </div>

                        <div className = "grid grid-cols-2 text-center gap-4 ">
                            <div>
                            Amazon
                            </div>

                            <div>
                            Expedia Group
                            </div>
                        </div>

                     </div>
    )
}

export default Companies;
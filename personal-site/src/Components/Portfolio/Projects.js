import React from 'react';
import { Link } from 'react-router-dom';

function Projects (){
    return (
         <div className = "sm:px-8 mt-9">
             <div className = "mx-auto max-w-7xl lg:px-8">
                 <div className = "relative px-4 sm:px-8 lg:px-12">
                        <div className = "mx-auto max-w-2xl lg:max-w-5xl">
                                <div className = "max-w-2xl">
                                     <h1 className = "text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                                     Im Josie Angelica. I live in San Diego, where I manage projects.
                                     </h1>
                                     <p className = "mt-6 text-base text-zinc-600 dark:text-zinc-400">
                                     This is my more about me. Im currunetly on track to graduate with my Bachelors in May. I have 4 internships under my belt. Im focusing on program management.
                                     I am a former SDE and love all things organization, collaboration and communication!
                                    </p>

                                </div>
                             </div>
                        </div>
                   </div>
             </div>
    )
}

export default Projects;
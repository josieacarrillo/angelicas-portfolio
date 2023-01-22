import React from 'react';
import { Link } from 'react-router-dom';


function PortfolioNavBar(){
    return (
        <div className = "flex flex-1 justify-end md:justify-center pt-6">
            <nav>
                <ul className = "flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
                    <li>
                        <a className = "relative block px-3 py-2 transition hover:text-gray-500 " href = "#industry">
                            Industry
                        </a>
                    </li>

                    <li>
                        <a className = "relative block px-3 py-2 transition hover:text-gray-500 " href = "#education">
                        Education
                        </a>
                    </li>
                    <li>
                        <a className = "relative block px-3 py-2 transition hover:text-gray-500 " href = "#resources">
                            Resources
                        </a>
                    </li>


                </ul>
            </nav>
        </div>


    )
}

export default PortfolioNavBar;
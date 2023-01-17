import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom';


function Navigation(){
    return (


        <nav className ="flex justify-between space-x-4">
          <a href="/" class="px-3 py-2 text-base font-thin text-gray-500 hover:text-gray-900">LOGO</a>
          <div className = "flex justify-end">
            <a href="/about" class="px-3 py-2 text-base font-thin text-gray-500 hover:text-gray-900">About</a>
            <a href="/portfolio" class="px-3 py-2 text-base font-thin text-gray-500 hover:text-gray-900">Portfolio</a>
            <a href="/contact" class="px-3 py-2 text-base font-thin text-gray-500 hover:text-gray-900">Contact</a>
            <a href="https://github.com/josieacarrillo" target="_blank" class="px-3 py-2 text-base font-thin text-gray-500 hover:text-gray-900">
                <FontAwesomeIcon
                    icon={faGithub}
                />
            </a>
          </div>
        </nav>


    )
}

export default Navigation;
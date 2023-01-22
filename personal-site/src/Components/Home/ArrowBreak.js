import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';


function ArrowBreak (){
    return (
        <div className="relative w-full mt-2">
              <a href="#work">
                <div className="mt-8 max-w-sm md:max-w-2xl mx-auto text-center w-full whitespace-nowrap px-8 py-3 rounded-full text-fun-pink bg-fun-pink-darkerer hover:bg-fun-pink hover:text-white transition-colors cursor-pointer">
                  <FontAwesomeIcon
                    icon = {faChevronDown}



                  />
                </div>
              </a>
            </div>





    )
}

export default ArrowBreak;
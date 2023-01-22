import React from 'react';

function Footer(){
    return (
        <footer className=" footer text-center text-xs p-3 absolute bottom-0 absolute inset-x-0 bottom-0 w-full shadow-lg position-absolute">
            <div className = "sm:px-8 ">
                <div className = "mx-auto max-w-7xl lg:px-8">
                    <div className = "relative px-4 sm:px-8 lg:px-12">
                        <p className = "text-sm text-zinc-400 font-thin text-gray-500">
                            &copy; 2023 Developed by Josie Carrillo.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
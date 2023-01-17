import React from 'react';

function Branding (){
    return (
        <div className="flex items-stretch">
        <div className = "">

                <h1 className ="pt-20 sm:text-center text-3xl font-medium tracking-tight text-gray-700 sm:text-5xl"> Student, Technical Program Manager, Organizer</h1>
                    <p className="mx-auto sm:text-center mt-6 max-w-2xl text-lg leading-8 text-gray-600 ">
                         Im Josie. I have loved organizing work so muc...,
                    </p>




        </div>

        <div class="self-auto">
            <img
                                                src = {"https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg"}
                                                sizes="(min-width: 1000px) 32rem, 32rem"
                                                width="600"
                                                height="600"
                                                class="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800 pt-6 pr-20"
                                                />
        </div>
        </div>
    )
}

export default Branding;
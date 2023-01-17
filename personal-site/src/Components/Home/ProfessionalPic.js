import React from 'react';

function ProfessionalPic (){
    return (
        <div className= "flex items-baseline">
        <div className = "pt-12 pb-4">
            <img
                                    src = {"https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg"}
                                    sizes="(min-width: 1000px) 32rem, 32rem"
                                    width="800"
                                    height="800"
                                    class="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
                                    />
        </div>
        </div>
    )
}

export default ProfessionalPic;
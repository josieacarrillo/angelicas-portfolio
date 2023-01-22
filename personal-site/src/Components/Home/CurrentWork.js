import React from 'react';

const callouts = [
  {
    name: 'Articles',
    description: 'Providing resources that helped me transition to Program Management',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg',
    imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
    href: '/portfolio#resources',
  },
  {
    name: 'Education',
    description: 'Pursuing bachelors in Computer Science',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg',
    imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
    href: '/portfolio#education',
  },
  {
    name: 'Reading',
    description: 'Fun Books Im currently working through',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '/portfolio#resources',
  },
]

function CurrentWork (){
    return (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 absolute">
                            <div id = "work"className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
                              <h2 className="text-2xl font-bold text-gray-700">Currently...</h2>

                              <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
                                {callouts.map((callout) => (
                                  <div key={callout.name} className="group relative">
                                    <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                                      <img
                                        src={callout.imageSrc}
                                        alt={callout.imageAlt}
                                        className="h-full w-full object-cover object-center"
                                      />
                                    </div>
                                    <h3 className="mt-6 text-sm text-gray-500">
                                      <a href={callout.href}>
                                        <span className="absolute inset-0" />
                                        {callout.name}
                                      </a>
                                    </h3>
                                    <p className="text-base font-semibold text-gray-900">{callout.description}</p>
                                  </div>
                                ))}
                              </div>
                              <div className="relative w-full mt-2">
                                    <a href="/portfolio">
                                      <div className="mt-8 max-w-sm md:max-w-2xl border border-fun-pink mx-auto text-center w-full whitespace-nowrap px-8 py-3 rounded-full text-fun-pink bg-fun-pink-darkerer hover:bg-fun-pink hover:text-white transition-colors cursor-pointer">
                                        View All
                                      </div>
                                    </a>
                                  </div>

                            </div>

                          </div>


    )
}

export default CurrentWork;
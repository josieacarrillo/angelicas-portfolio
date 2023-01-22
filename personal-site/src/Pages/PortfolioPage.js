import React from 'react';

const callouts = [
  {
    name: 'Expedia Group',
    description: 'Status Reporting Process Improvement',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg',
    imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
    href: '#',
  },
  {
    name: 'Learnings',
    description: 'Fun tools & processes for project management',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg',
    imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
    href: '#',
  },
  {
    name: 'Expedia Group',
    description: 'Technical Program Manager Internship',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '#',
  },
]

const callouts2 = [
  {
    name: 'Amazon',
    description: 'Software Engineer Internship',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg',
    imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
    href: '#',
  },
  {
    name: 'Learnings',
    description: 'Fun tools & processes for project management',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg',
    imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
    href: '#',
  },
  {
    name: 'Expedia Group',
    description: 'Technical Program Manager Internship',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '#',
  },
]


class PortfolioPage extends React.Component{
    render(){
        return (
            <div>
                  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
                      <h2 className="text-2xl font-bold text-gray-900">Industry</h2>

                      <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
                        {callouts2.map((callout) => (
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
                    </div>
                  </div>

                  <div>
                                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                                      <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
                                        <h2 className="text-2xl font-bold text-gray-900">Education</h2>

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
                                      </div>
                                    </div>
                                  </div>

                                  <div>
                                                                      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                                                                        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
                                                                          <h2 className="text-2xl font-bold text-gray-900">Resources</h2>

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
                                                                        </div>
                                                                      </div>
                                                                    </div>

                </div>
        )
    }
}

export default PortfolioPage
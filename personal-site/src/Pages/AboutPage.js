import React from 'react';


class AboutPage extends React.Component{
    render(){
        return (
        <div className = "sm:px-8 mt-9 pt-20  ">
                                <div className = "mx-auto max-w-7xl lg:px-8">
                                    <div className = "relative px-4 sm:px-8 lg:px-12">
                                        <div className = "mx-auto max-w-2xl lg:max-w-5xl flex justify-center ">
                                            <div className = "max-w-2xl ">
                                                <h1 className = "text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                                                I'm Josie Carrillo.
                                                </h1>
                                                <p className = "mt-6 text-base text-zinc-600 dark:text-zinc-400">
                                                Im currently on track to graduate with my Bachelors in May. I have 4 internships under my belt. Im focusing on program management.
                                                I am a former SDE and love all things organization, collaboration and communication!

                                                </p>
                                                <p className = "mt-6 text-base text-zinc-600 dark:text-zinc-400">
                                                 I've spent 4 years discovering my true passion - and its in project management. A space where my vision can come to life through amazing and talented engineers.
                                                </p>
                                                <p className = "mt-6 text-base text-zinc-600 dark:text-zinc-400">
                                                I love learning new tools that'll benefit everyone.

                                                </p>
                                            </div>
                                        </div>
                                    </div>
                               </div>
          </div>
        )
    }
}

export default AboutPage
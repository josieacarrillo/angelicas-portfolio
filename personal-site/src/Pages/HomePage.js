import React from 'react';
import Footer from '../Components/Footer'
import Branding from '../Components/Home/Branding'
import Projects from '../Components/Home/Projects'
import ProfessionalPic from '../Components/Home/ProfessionalPic'



class HomePage extends React.Component{
    render(){
        return (
            <div >
                <Branding />

                <Projects />
                <Footer />
            </div>
        )
    }
}

export default HomePage
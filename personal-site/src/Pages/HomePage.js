import React from 'react';
import Footer from '../Components/Footer'
import Branding from '../Components/Home/Branding'


class HomePage extends React.Component{
    render(){
        return (
            <div >
                <Branding />
                <Footer />
            </div>
        )
    }
}

export default HomePage
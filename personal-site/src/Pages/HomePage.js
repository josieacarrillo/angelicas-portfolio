import React from 'react';
import Header from '../Components/Header'
import Footer from '../Components/Footer'


class HomePage extends React.Component{
    render(){
        return (
            <div>
                <Header/>
                <h1> Home Page! </h1>
                <Footer />
            </div>
        )
    }
}

export default HomePage
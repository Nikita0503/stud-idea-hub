import React from 'react';
import './MainPage.css';
import Header from '../components/Header.js';
import '../content/fonts/Ubuntu-L.ttf'

export default class MainPage extends React.Component {
    render(){
        return(
            <div className='mainWhole'>
                <Header/>
                <div className='mainContent'>
                    <div className='mainText'>
                        <text className='mainDate'>February, 20/2020</text>
                        <text className='mainTitle'>Conference about <br/>current trends in IT</text>
                        <text className='mainPlace'>Assembly hall of the head building of KNU</text>
                    </div>
                    <div className='mainLogo'>
                        <img className='mainLogoImg' src={require('../content/images/main_logo.png')} alt='logo'/>
                    </div>
                </div>
            </div>
        );
    }
}


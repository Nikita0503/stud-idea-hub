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
                        <text className='mainTitle'>Конференція про <br/>сучасні тренди в IT</text>
                        <text className='mainPlace'>Актова зала головного корпусу КНУ</text>
                    </div>
                    <div className='mainLogo'>
                        <img className='mainLogoImg' src={require('../content/images/main_logo.png')} alt='logo'/>
                    </div>
                </div>
            </div>
        );
    }
}


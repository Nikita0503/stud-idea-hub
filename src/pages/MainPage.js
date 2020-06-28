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
                        <text style={{fontSize: 50, marginLeft: 100}}>February, 20/2020</text>
                        <text style={{fontSize: 74, margin: 60, marginLeft: 100, fontWeight: 'bold'}}>Конференція про <br/>сучасні тренди в IT</text>
                        <text style={{fontSize: 32, marginLeft: 100}}>Актова зала головного корпусу КНУ</text>
                    </div>
                    <div className='mainLogo'>
                        <img src={require('../content/images/main_logo.png')} style={{width: 720, marginRight: 50}} alt='logo'/>
                    </div>
                </div>
            </div>
        );
    }
}


import React from 'react';
import './AboutPage.css';

export default class AboutPage extends React.Component {
    render(){
        return(
            <div>
                <div className='aboutContent'>
                    <div className='aboutTitle'>
                        <img src={require('../../src/content/images/head_decor2.png')} style={{width: 100, marginTop: 100}} alt='logo'/>
                        <text style={{fontSize: 45, marginLeft: 20, marginRight: 60, marginTop: 100, fontWeight: 'bold'}}>ABOUT STUD IDEA HUB</text>
                    </div>
                    <div className='aboutDescription'>
                        <text style={{fontSize: 24, width: '50%', textAlign: 'center'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</text>
                    </div>
                    <div className='aboutPhotos'>
                        <img className='aboutPhoto' src={require('../../src/content/images/photo1.png')} alt='logo'/>
                        <img className='aboutPhoto' src={require('../../src/content/images/photo2.png')} alt='logo'/>
                        <img className='aboutPhoto' src={require('../../src/content/images/photo3.png')} alt='logo'/>
                    </div>
                </div>
            </div>
        );
    }
}

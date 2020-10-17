import React from 'react';
import './AboutPage.css';

export default class AboutPage extends React.Component {
    render(){
        return(
            <div>
                <div className='aboutContent'>
                    <div className='aboutTitle'>
                        <img className='aboutTitleDecor' src={require('../../src/content/images/head_decor2.png')} alt='logo'/>
                        <text className='aboutTitleText' style={{fontWeight: 'bold'}}>ABOUT STUD IDEA HUB</text>
                    </div>
                    <div className='aboutDescription'>
                        <text className='aboutDescriptionText' style={{textAlign: 'center'}}>The purpose of the conference is to unite the IT companies of Krivyi Rih and students of the Kryvyi Rih National University. IT companies will talk about themselves, their projects and vacancies. After the speakers' speeches, students during the round table will be able to ask questions and discuss topics of interest</text>
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

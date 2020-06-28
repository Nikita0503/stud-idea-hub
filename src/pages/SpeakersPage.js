import React from 'react';
import './SpeakersPage.css';
import Speaker from '../components/Speaker';
import Speaker2 from '../components/Speaker2';

export default class SpeakersPage extends React.Component {
    render(){
        return(
            <div className='speakersContent'>
                <div className='speakersLeft'>
                    <img src={require('../../src/content/images/back_decor4.png')} style={{width: '100%'}} alt='logo'/>
                    <img src={require('../../src/content/images/back_decor_1.png')} style={{width: '100%'}} alt='logo'/>
                </div>
                <div className='speakersMainPart'>
                    <div className='speakersTitle'>
                        <text  style={{fontSize: 45, marginLeft: 120, marginRight: 10, marginTop: 10, fontWeight: 'bold'}}>MEET OUR SPEAKERS</text>
                        <img src={require('../../src/content/images/head_decor2.png')} style={{width: 100, marginLeft: 15, marginTop: 10}} alt='logo'/>
                    </div>
                    <div className='speakersDescription'>
                        <text style={{fontSize: 22, width: '70%', textAlign: 'center'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</text>
                    </div>
                    <div className='speakers'>
                        <Speaker name='Nikita Shevtsiv' avatar='shevtsiv_n.png' topicAvatar='nikita.png' description='ReactNative cross-platform mobile application development'/> 
                        <Speaker2 name='Anna Abramova' avatar='abramova_a.png' topicAvatar='anna.PNG' description='Web design and website design development techniques'/>
                        <Speaker name='Valeria Pirnik' avatar='pirnik_v.png' topicAvatar='lera.png' description='Prospects for VR technology in 2020'/> 
                        <Speaker2 name='Peremena Dmitry' avatar='peremena_d.png' topicAvatar='peremena.png' description='What we need, or how to protect our health'/>
                        <Speaker name='Sherehov Dmitry' avatar='sherehov_d.png' topicAvatar='dima.png' description='The possibilities of modern computer graphics'/> 
                        <Speaker2 name='Kruppa Maxim' avatar='kruppa_m.png' topicAvatar='maksim.png' description='The use of fuzzy logic in various spheres of life'/>
                        <Speaker name='Lukash Savely' avatar='lukash_s.png' topicAvatar='sava.png' description='The relevance of English and other languages of the world in the IT industry'/> 
                        <Speaker2 name='SPECIAL GUEST' avatar='photo1.png' topicAvatar='nikita.png' description='The relevance of English and other languages of the world in the IT industry'/>                        
                    </div>
                </div>
                <div className='speakersRight'>
                    <img src={require('../../src/content/images/back_decor_6.png')} style={{width: '100%'}} alt='logo'/>
                </div>
            </div>   
        );
    }
}
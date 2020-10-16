import React from 'react';
import './SpeakersPage.css';
import Speaker from '../components/Speaker';
import Speaker2 from '../components/Speaker2';
import {refSpeakers} from '../components/Header'

export default class SpeakersPage extends React.Component {
    render(){
        return(
            <div ref={refSpeakers} className='speakersContent'>
                <div className='speakersLeft'>
                    <img src={require('../../src/content/images/back_decor4.png')} style={{width: '100%'}} alt='logo'/>
                    <img src={require('../../src/content/images/back_decor_1.png')} style={{width: '100%'}} alt='logo'/>
                </div>
                <div className='speakersMainPart'>
                    <div className='speakersTitle'>
                        <text className='speakersTitleText' style={{marginTop: 10, fontWeight: 'bold'}}>MEET OUR SPEAKERS</text>
                        <img className='speakersTitleDecor' src={require('../../src/content/images/head_decor2.png')} style={{marginLeft: 15, marginTop: 10}} alt='logo'/>
                    </div>
                    <div className='speakersDescription'>
                        <text className='speakersDescriptionText' style={{textAlign: 'center'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</text>
                    </div>
                    <div className='speakers'>
                        <div className="speakersRow">
                            <Speaker name='Nikita Shevtsiv' avatar='shevtsiv_n.png' topicAvatar='nikita.png' description='ReactNative cross-platform mobile application development'/> 
                            <Speaker name='Anna Abramova' avatar='abramova_a.png' topicAvatar='anna.PNG' description='Web design and website design development techniques'/>
                        </div>
                        <div className="speakersRow">
                            <Speaker name='Valeria Pirnik' avatar='pirnik_v.png' topicAvatar='lera.png' description='Prospects for VR technology in 2020'/> 
                            <Speaker name='Peremena Dmitry' avatar='peremena_d.png' topicAvatar='peremena.png' description='What we need, or how to protect our health'/>
                        </div>
                        <div className="speakersRow">
                            <Speaker name='Sherehov Dmitry' avatar='sherehov_d.png' topicAvatar='dima.png' description='The possibilities of modern computer graphics'/> 
                            <Speaker name='Kruppa Maxim' avatar='kruppa_m.png' topicAvatar='maksim.png' description='The use of fuzzy logic in various spheres of life'/>
                        </div>
                        <div className="speakersRow">
                            <Speaker name='Lukash Savely' avatar='lukash_s.png' topicAvatar='sava.png' description='The relevance of English and other languages of the world in the IT industry'/> 
                            <Speaker name='SPECIAL GUEST' avatar='photo1.png' topicAvatar='nikita.png' description='The relevance of English and other languages of the world in the IT industry'/>                        
                        </div>
                    </div>
                </div>
                <div className='speakersRight'>
                    <img src={require('../../src/content/images/back_decor_6.png')} style={{width: '100%'}} alt='logo'/>
                </div>
            </div>   
        );
    }
}

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
                    <img src={require('../../src/content/images/back_decor_4.png')} style={{width: '100%'}} alt='logo'/>
                    <img src={require('../../src/content/images/back_decor_1.png')} style={{width: '100%'}} alt='logo'/>
                </div>
                <div className='speakersMainPart'>
                    <div className='speakersTitle'>
                        <text className='speakersTitleText' style={{marginTop: 10, fontWeight: 'bold'}}>MEET OUR SPEAKERS</text>
                        <img className='speakersTitleDecor' src={require('../../src/content/images/head_decor2.png')} style={{marginLeft: 15, marginTop: 10}} alt='logo'/>
                    </div>
                    <div className='speakersDescription'>
                        <text className='speakersDescriptionText' style={{textAlign: 'center'}}>All of our speakers are student activists who want to change the university for the better and help other students to become better. The topics of the reports are selected in accordance with modern trends in the IT world. Among the speakers there are undergraduates who have commercial experience and will share their experience in their reports. Also, a special guest - "SPECIAL GUEST", a graduate of the Krivyi Rih National University, Senior developer of it-company IDAP will talk about the importance of code cleanliness and refactoring</text>
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
                            <Speaker name='Bohdan Kikacheishvili' avatar='Kikacheishvili_b.png' topicAvatar='refact.png' description='The role of code refactoring in software development'/>                        
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

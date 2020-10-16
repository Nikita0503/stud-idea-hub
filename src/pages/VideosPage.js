import React from 'react';
import './VideosPage.css';
import {refContent} from '../components/Header'

export default class VideosPage extends React.Component {
    render(){
        return(
            <div ref={refContent} className='videosContent'>
                <div className='videosLeft'>
                    <img src={require('../content/images/back_decor_9.png')} style={{width: '100%'}} alt='decor'/>
                </div> 
                <div className='videosMainPart'>
                    <div className='videosTitle'>
                        <text className='videosTitleText'>Watch our conference!</text>
                    </div>
                    <div className='videos'>
                        <img className='video' src={require('../content/images/facebook.png')} alt='facebook'/>
                        <img className='video' src={require('../content/images/youtube.png')} alt='youtube'/>
                        <img className='video' src={require('../content/images/instagram.png')} alt='instagram'/>

                    </div>
               </div>
               <div className='videosRight'>
                    <img src={require('../content/images/back_decor_10.png')} style={{width: '100%'}} alt='decor'/>
                </div> 
            </div>
            
        );
    }
}


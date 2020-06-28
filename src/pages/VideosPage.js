import React from 'react';
import './VideosPage.css';
export default class VideosPage extends React.Component {
    render(){
        return(
            <div className='videosContent'>
                <div className='videosLeft'>
                    <img src={require('../content/images/back_decor_9.png')} style={{width: '100%'}} alt='decor'/>
                </div> 
                <div className='videosMainPart'>
                    <div className='videosTitle'>
                        <text style={{fontSize: 60, marginTop: 60, fontWeight: 'bold', color: 'white'}}>Watch our conference!</text>
                    </div>
                    <div className='videos'>
                        <img src={require('../content/images/polygon_l.png')} style={{height: 55, marginRight: 70}} alt='previous'/> 
                        <iframe title="video" width="560" height="315" src="https://www.youtube.com/embed/c7P03kkrEG8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <img src={require('../content/images/polygon_r.png')} style={{height: 55, marginLeft: 70}} alt='next'/>
                    </div>
                    <div className='videosIndicator'>
                            <text style={{fontSize: 60}}>. . .</text>
                    </div>
               </div>
               <div className='videosRight'>
                    <img src={require('../content/images/back_decor_10.png')} style={{width: '100%'}} alt='decor'/>
                </div> 
            </div>
            
        );
    }
}


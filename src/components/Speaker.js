import React from 'react';
import './Speaker.css';

export default class Speaker extends React.Component {
    render(){
        return(
            <div className='speakerContent'>
                <img className='speakerAvatar' src={require('../content/images/' + this.props.avatar)} alt='avatar'/>
                <div className='speakerText'>
                    <text className='speakerName' style={{marginLeft: 20}}>{this.props.name}</text>
                    <text className='speakerDescription' style={{marginLeft: 20, color: 'gray'}}>{this.props.description}</text>
                </div>
                <img className='speakerAvatarTheme' src={require('../content/images/' + this.props.topicAvatar)} alt='topicAvatar'/>
            </div>   
        );
    }
}

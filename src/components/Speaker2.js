import React from 'react';
import './Speaker2.css';

export default class Speaker extends React.Component {
    render(){
        return(
            <div className='speaker2Content'>
                <img className='speaker2AvatarTheme' src={require('../content/images/' + this.props.topicAvatar)} alt='topicAvatar'/>
                <div className='speaker2Text'>
                    <text className='speaker2Name' style={{marginRight: 20, textAlign: 'end'}}>{this.props.name}</text>
                    <text className='speaker2Description' style={{marginRight: 20, color: 'gray', textAlign: 'end'}}>{this.props.description}</text>
                </div>
                <img className='speaker2Avatar' src={require('../content/images/' + this.props.avatar)} alt='avatar'/>
            </div>   
        );
    }
}

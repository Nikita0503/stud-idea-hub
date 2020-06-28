import React from 'react';
import './Speaker.css';

export default class Speaker extends React.Component {
    render(){
        return(
            <div className='speakerContent'>
                <img src={require('../content/images/' + this.props.avatar)} style={{width: 140}} alt='avatar'/>
                <div className='speakerText'>
                    <text style={{marginLeft: 20, fontSize: 32}}>{this.props.name}</text>
                    <text style={{marginLeft: 20, fontSize: 18, color: 'gray'}}>{this.props.description}</text>
                </div>
                <img src={require('../content/images/' + this.props.topicAvatar)} style={{width: 120, marginLeft: 10}} alt='topicAvatar'/>
            </div>   
        );
    }
}

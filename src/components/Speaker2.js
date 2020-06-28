import React from 'react';
import './Speaker2.css';

export default class Speaker extends React.Component {
    render(){
        return(
            <div className='speaker2Content'>
                <img src={require('../content/images/' + this.props.topicAvatar)} style={{width: 100, marginRight: 10}} alt='topicAvatar'/>
                <div className='speaker2Text'>
                    <text style={{marginRight: 20, fontSize: 30, textAlign: 'end'}}>{this.props.name}</text>
                    <text style={{marginRight: 20, fontSize: 18, color: 'gray', textAlign: 'end'}}>{this.props.description}</text>
                </div>
                <img src={require('../content/images/' + this.props.avatar)} style={{width: 140}} alt='avatar'/>
            </div>   
        );
    }
}

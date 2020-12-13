import React from 'react';
import './Speaker.css';

export default class Speaker extends React.Component {
    render(){
        return(
            <div className='speakerGradient'>
            <div className='speakerContent'>
                <div className='speakerAvatarBackground'>
                    <img className='speakerAvatar' src={require('../content/images/' + this.props.avatar)} alt='avatar' style={{marginTop: this.props.name == 'Bohdan Kikacheishvili' ? 2 : 0}}/>
                </div>
                <div className='speakerText'>
                    <text className='speakerName' style={{textAlign: 'center'}}>{this.props.name}</text>
                </div>
                <div className="speakerFooter">
                    <text className='speakerDescription'>{this.props.description}</text>
                    <div className="speakerAvatarThemeBackground">
                        <img className='speakerAvatarTheme' src={require('../content/images/' + this.props.topicAvatar)} alt='topicAvatar'/>
                    </div>
                </div>
            </div>
            </div>   
        );
    }
}

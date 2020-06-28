import React from 'react';
import './Header.css';
import '../content/fonts/Ubuntu-B.ttf'

export default class Header extends React.Component {
    render(){
        return(
        <div className='header'>
            <div className='logo'>
                <text style={{marginLeft: 80, marginTop: 50, fontSize: 45, fontWeight: 'bold'}}>Stud Idea hub</text>
            </div>
            <div className='menu'>
                <div className='menuButtonVideos'><text style={{fontSize: 25, color: 'black'}}>Videos</text></div>
                <div className='menuButton'><text style={{fontSize: 25}}>CONTACTS</text></div>
                <div className='menuButton'><text style={{fontSize: 25}}>TIMETABLE</text></div>
                <div className='menuButton'><text style={{fontSize: 25}}>SPEAKERS</text></div>     
            </div>
        </div>);
    }
}


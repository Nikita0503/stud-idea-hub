import React, {createRef } from 'react';
import './Header.css';
import '../content/fonts/Ubuntu-B.ttf'

export const refSpeakers = createRef(null)
export const refTimetable = createRef(null)
export const refContacts = createRef(null)
export const refContent = createRef(null)

export default class Header extends React.Component {
    render(){
        return(
        <div className='header'>
            <div className='logo'>
                <text style={{marginTop: 50, fontWeight: 'bold'}}>Stud Idea hub</text>
            </div>
            <div className='menu'>
                <div className='menuButtonVideos' onClick={() => {window.scrollTo({left: 0, top: refContent.current.offsetTop, behavior: 'smooth'})}}><text style={{fontSize: 25, color: 'black'}}>Content</text></div>
                <div className='menuButton'><text style={{fontSize: 25}} onClick={() => {window.scrollTo({left: 0, top: refContacts.current.offsetTop, behavior: 'smooth'})}}>CONTACTS</text></div>
                <div className='menuButton'><text style={{fontSize: 25}} onClick={() => {window.scrollTo({left: 0, top: refTimetable.current.offsetTop, behavior: 'smooth'})}}>TIMETABLE</text></div>
                <div className='menuButton'><text style={{fontSize: 25}} onClick={() => {window.scrollTo({left: 0, top: refSpeakers.current.offsetTop, behavior: 'smooth'})}}>SPEAKERS</text></div>     
            </div>
        </div>);
    }
}


import React from 'react';
import './ContactsPage.css';
import {refContacts} from '../components/Header'

export default class ContactsPage extends React.Component {
    render(){
        return(
            <div ref={refContacts} className='contactsContent'>
                <div className='contactsInfo'>
               <div className='contacts'>
                <text className='contactsText'>CONTACT US:</text>
                <text className='contactsLiteText'>097-091-97-21</text>
                <text className='contactsLiteText'>nikita0503ua@gmail.com</text>
               </div>
               <div className='contactsLogo'>
                <img src={require('../content/images/logo.png')} style={{width: '100%'}} alt='logo'/>
               </div>
               </div>
               <div className='contactsSponsors'>
                <text className='contactsText'>OUR SPONSORS:</text>
                <div className='contactsSponsorsImages'>
                    <img src={require('../content/images/syntech.png')} className='contactsSponsorsImage' alt='logo'/>
                    <img src={require('../content/images/zaraffasoft.png')} className='contactsSponsorsImage' alt='logo'/>
                </div>
               </div>
            </div>
        );
    }
}


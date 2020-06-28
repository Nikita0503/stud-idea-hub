import React from 'react';
import './ContactsPage.css';
export default class ContactsPage extends React.Component {
    render(){
        return(
            <div className='contactsContent'>
               <div className='contacts'>
                <text style={{fontSize: 30, fontWeight: 'bold'}}>CONTACT US:</text>
                <text style={{margin: 12, fontSize: 23}}>097-091-97-21</text>
                <text style={{fontSize: 23}}>nikita0503@gmail.com</text>
               </div>
               <div className='contactsLogo'>
                <img src={require('../content/images/logo.png')} style={{width: 400}} alt='logo'/>
               </div>
               <div className='contactsSponsors'>
                <text style={{fontSize: 30, fontWeight: 'bold'}}>OUR SPONSORS:</text>
                <div>
                    <img src={require('../content/images/sponsors.png')} style={{height: 100, }} alt='logo'/>
                </div>
               </div>
            </div>
        );
    }
}


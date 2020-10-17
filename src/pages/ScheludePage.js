import React from 'react';
import './SchedulePage.css';
import {refTimetable} from '../components/Header'

export default class SchedulePage extends React.Component {
    render(){
        return(
            <div ref={refTimetable} className='scheduleContent'>
                <div className='scheduleLeft'>
                    <img src={require('../../src/content/images/back_decor_2.png')} style={{width: '100%', marginTop: 20}} alt='logo'/>
                </div>
                <div className='scheludeMainPart'>
                    <div className='scheduleHeader'>
                        <text className='scheduleHeaderDateText'>February, 20 / Thursday</text>
                        <text className='scheduleHeaderText'>CONFERENCE TIMETABLE</text>
                    </div>
                    <div className='scheduleTimetable'>
                        <div className='scheduleItem1Content'>
                            <div style={{width: '40%', display: 'flex', alignItems: 'center'}}>
                                <text className='scheduleItemTime'>12:00 - 12:30</text>
                            </div>
                            <div style={{width: '60%', display: 'flex', alignItems: 'center'}}>
                                <text className='scheduleItemText'>PRESENTATION<br/> OF INVITED<br/> IT-COMPANIES</text>
                            </div>
                        </div>
                        <div className='scheduleCompanies'>
                            <div className='scheduleCompaniesPart1'>
                                <img src={require('../content/images/syntech.png')} style={{width: '45%', objectFit: 'contain'}} alt='logo'/>
                                <img src={require('../content/images/zaraffasoft.png')} style={{width: '45%', objectFit: 'contain'}} alt='logo'/>
                            </div>
                            <div className='scheduleCompaniesPart2'>
                                <img src={require('../content/images/kmine.png')} style={{width: '33%', objectFit: 'contain'}} alt='logo'/>
                                <img src={require('../content/images/sooprIT.png')} style={{width: '33%', objectFit: 'contain', marginBottom: 10}} alt='logo'/>
                                <img src={require('../content/images/idap.png')} style={{width: '33%', objectFit: 'contain'}} alt='logo'/>
                            </div>
                        </div>
                        <div className='scheduleItem2Content'>
                            <div style={{width: '40%', display: 'flex'}}>
                                <text className='scheduleItemTime'>12:30 - 13:00</text>
                            </div>
                            <div style={{width: '60%', display: 'flex', flexDirection: 'column'}}>
                                <text className='scheduleItemText' style={{marginBottom: 10}}>SPEAKERS 'SPEECHES <br/>(PART 2)</text>
                                <div className='scheduleItemSpeakers'>
                                    <text className='scheduleItemSpeakersText'>Shevtsiv Nikita</text>
                                    <text className='scheduleItemSpeakersText'>Abramova Anna</text>
                                    <text className='scheduleItemSpeakersText'>Kruppa Maxim</text>
                                    <text className='scheduleItemSpeakersText'>Peremena Dmytro</text>
                                </div>
                            </div>
                        </div>
                        <div className='scheduleItem3Content'>
                            <div style={{width: '40%', display: 'flex', alignItems: 'center'}}>
                                <text className='scheduleItemTime'>13:00 - 13:30</text>
                            </div>
                            <div style={{width: '60%', display: 'flex', alignItems: 'center'}}>
                                <img src={require('../content/images/java.png')} style={{width: 50, marginLeft: 10}} alt='logo'/>
                                <text className='scheduleItemText'>КАВА-БРЕЙК</text>
                            </div>
                        </div>
                        <div className='scheduleItem4Content'>
                            <div style={{width: '40%', display: 'flex'}}>
                                <text className='scheduleItemTime'>12:30 - 13:00</text>
                            </div>
                            <div style={{width: '60%', display: 'flex', flexDirection: 'column'}}>
                                <text className='scheduleItemText' style={{marginBottom: 10}}>SPEAKERS 'SPEECHES <br/>(PART 2)</text>
                                <div className='scheduleItemSpeakers'>
                                    <text className='scheduleItemSpeakersText'>Pirnik Valeria</text>
                                    <text className='scheduleItemSpeakersText'>Sherehov Dmytro</text>
                                    <text className='scheduleItemSpeakersText'>Lukash Savelyy</text>
                                </div>
                            </div>
                        </div>
                        <div className='scheduleItem5Content'>
                            <div style={{width: '40%', display: 'flex', alignItems: 'center'}}>
                                <text className='scheduleItemTime'>14:00 - 14:30</text>
                            </div>
                            <div style={{width: '60%', display: 'flex', alignItems: 'center'}}>
                                <text className='scheduleItemText'>ROUND TABLE WITH <br/>REPRESENTATIVES <br/>IT-COMPANIES</text>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='scheduleRight'>
                    <img src={require('../../src/content/images/back_decor_8.png')} style={{width: '100%', marginTop: 20}} alt='logo'/>
                    <img src={require('../../src/content/images/back_decor_7.png')} style={{width: '100%'}} alt='logo'/>
                </div>
            </div>   
        );
    }
}

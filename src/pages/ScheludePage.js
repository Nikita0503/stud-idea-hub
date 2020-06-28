import React from 'react';
import './SchedulePage.css';


export default class SchedulePage extends React.Component {
    render(){
        return(
            <div className='scheduleContent'>
                <div className='scheduleLeft'>
                    <img src={require('../../src/content/images/back_decor_2.png')} style={{width: '100%', marginTop: 20}} alt='logo'/>
                </div>
                <div className='scheludeMainPart'>
                    <div className='scheduleHeader'>
                        <text style={{fontSize: 22, fontWeight: 'bold'}}>February, 20 / Thursday</text>
                        <text style={{fontSize: 40, marginTop: 20, fontWeight: 'bold'}}>CONFERENCE TIMETABLE</text>
                    </div>
                    <div className='scheduleTimetable'>
                        <div className='scheduleItem1Content'>
                            <div style={{width: '40%', display: 'flex', alignItems: 'center'}}>
                                <text style={{fontSize: 25}}>12:00 - 12:30</text>
                            </div>
                            <div style={{width: '60%', display: 'flex', alignItems: 'center'}}>
                                <text style={{fontSize: 25}}>ПРЕДСТАВЛЕННЯ ЗАПРОШЕНИХ<br/> IT-КОМПАНІЙ</text>
                            </div>
                        </div>
                        <div className='scheduleCompanies'>
                            <img src={require('../content/images/companies.png')} style={{height: 150}} alt='logo'/>
                        </div>
                        <div className='scheduleItem2Content'>
                            <div style={{width: '40%'}}>
                                <text style={{fontSize: 25}}>12:30 - 13:00</text>
                            </div>
                            <div style={{width: '60%', display: 'flex', flexDirection: 'column'}}>
                                <text style={{fontSize: 25, marginBottom: 5}}>ВИСТУПИ СПІКЕРІВ (1 ЧАСТИНА)</text>
                                <div className='scheduleItemSpeakers'>
                                    <text style={{fontSize: 25, color: 'blue'}}>Шевців Нікіта</text>
                                    <text style={{fontSize: 25, color: 'blue'}}>Абрамова Анна</text>
                                    <text style={{fontSize: 25, color: 'blue'}}>Круппа Максим</text>
                                    <text style={{fontSize: 25, color: 'blue'}}>Пєрємєна Дмитро</text>
                                </div>
                            </div>
                        </div>
                        <div className='scheduleItem3Content'>
                            <div style={{width: '40%', display: 'flex', alignItems: 'center'}}>
                                <text style={{fontSize: 25}}>13:00 - 13:30</text>
                            </div>
                            <div style={{width: '60%', display: 'flex', alignItems: 'center'}}>
                                <img src={require('../content/images/java.png')} style={{width: 50, marginLeft: 10}} alt='logo'/>
                                <text style={{fontSize: 25, marginLeft: 20}}>КАВА-БРЕЙК</text>
                            </div>
                        </div>
                        <div className='scheduleItem4Content'>
                            <div style={{width: '40%'}}>
                                <text style={{fontSize: 25}}>12:30 - 13:00</text>
                            </div>
                            <div style={{width: '60%', display: 'flex', flexDirection: 'column'}}>
                                <text style={{fontSize: 25, marginBottom: 5}}>ВИСТУПИ СПІКЕРІВ (2 ЧАСТИНА)</text>
                                <div className='scheduleItemSpeakers'>
                                    <text style={{fontSize: 25, color: 'blue'}}>Пірник Валерія</text>
                                    <text style={{fontSize: 25, color: 'blue'}}>Шерехов Дмитро</text>
                                    <text style={{fontSize: 25, color: 'blue'}}>Лукаш Савелій</text>
                                </div>
                            </div>
                        </div>
                        <div className='scheduleItem5Content'>
                            <div style={{width: '40%', display: 'flex', alignItems: 'center'}}>
                                <text style={{fontSize: 25}}>14:00 - 14:30</text>
                            </div>
                            <div style={{width: '60%', display: 'flex', alignItems: 'center'}}>
                                <text style={{fontSize: 25}}>КРУГЛИЙ СТІЛ З ПРЕДСТАВНИКАМИ IT-КОМПАНІЙ</text>
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

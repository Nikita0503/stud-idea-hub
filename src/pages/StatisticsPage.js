import React from 'react';
import './StatisticsPage.css';
import StatisticsItem from '../components/StatisticsItem'

export default class StatisticsPage extends React.Component {
    render(){
        return(
            <div>
                <div className='staticticsContent'>
                    <StatisticsItem count={8} unit='speakers' description='8 speakers with interesting reports on current trends in IT'/>
                    <StatisticsItem count={4} unit='hours' description='4 hours of conference, which combined: 8 speeches, coffee break and round table'/>
                    <StatisticsItem count={104} unit='listeners' description='104 listeners who took part in the conference joined the It-community in Kryvyi Rih'/>
                </div>
            </div>
        );
    }
}

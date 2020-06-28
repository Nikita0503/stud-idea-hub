import React from 'react';
import './StatisticsPage.css';
import StatisticsItem from '../components/StatisticsItem'

export default class StatisticsPage extends React.Component {
    render(){
        return(
            <div>
                <div className='staticticsContent'>
                    <StatisticsItem count={7} unit='speakers' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit'/>
                    <StatisticsItem count={4} unit='hours' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit'/>
                    <StatisticsItem count={104} unit='listeners' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit'/>
                </div>
            </div>
        );
    }
}

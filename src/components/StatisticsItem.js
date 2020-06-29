import React from 'react';
import './StatisticsItem.css';

export default class MainPage extends React.Component {
    render(){
        return(
            <div className='statisticsItemContent'>
               <text className='statisticsItemTitle' style={{textAlign: 'center', fontWeight: 'bold'}}>{this.props.count}<br/>{this.props.unit}</text>
               <text className='statisticsItemDescription' style={{textAlign: 'center', marginTop: 20}}>{this.props.description}</text>
            </div>
            
        );
    }
}


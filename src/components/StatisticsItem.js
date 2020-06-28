import React from 'react';
import './StatisticsItem.css';

export default class MainPage extends React.Component {
    render(){
        return(
            <div className='statisticsItemContent'>
               <text style={{textAlign: 'center', fontSize: 60, fontWeight: 'bold'}}>{this.props.count}<br/>{this.props.unit}</text>
               <text className='statisticsItemDescription' style={{width: '80%', textAlign: 'center', marginTop: 20, fontSize: 18}}>{this.props.description}</text>
            </div>
            
        );
    }
}


import React from 'react';
import MarketSchedule from './MarketSchedule';
import Month from "./SeasonalProduce";
import MonthForm from './MonthForm';

class MarketControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

handleClick = () =>
this.setState({})

  render() {
    let selectMonthButton = null;
    return (
      
      <React.Fragment>
        <MarketSchedule />
        <MonthForm/>
        <Month/>
      </React.Fragment>
    );
  }
}

export default MarketControl



import React from 'react';
import MarketSchedule from './MarketSchedule';
import { availableProduce } from "./SeasonalProduce";
import MonthForm from './MonthForm';


// const monthList = [{ selectedMonth: "January" }, { selectedMonth: "February" }, { selectedMonth: "March" }, { selectedMonth: "April" }, { selectedMonth: "May" }, { selectedMonth: "June" }, { selectedMonth: "July" }, { selectedMonth: "August" }, { selectedMonth: "September" }, { selectedMonth: "October" }, { selectedMonth: "November" }, { selectedMonth: "December" }];


class MarketControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedMonth: ''
    };
  }

  handleMonthChange = (newMonth) =>
    this.setState({ selectedMonth: newMonth });

  render() {
    const { selectedMonth } = this.state;
    const selectedProduce = availableProduce.find(month => month.month === selectedMonth);


    return (
      < React.Fragment >
        <MonthForm
         onMonthChange={this.handleMonthChange} />
        {selectedProduce && (
          <div>
            <h2>{selectedProduce.month}</h2>
            <ul>
              {selectedProduce.selection.map((produce, index) => (
                <li key={index}>{produce}</li>
              ))}
            </ul>
          </div>
        )}
        {/* <button onClick={this.handleClick}>Choose Month</button> */}
        {/* <MarketSchedule /> */}
      </React.Fragment >
      // <React.Fragment></React.Fragment>
    );
  }
}



export default MarketControl



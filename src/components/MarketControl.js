import React from 'react';
import marketSchedule from './MarketSchedule';
import { availableProduce } from "./SeasonalProduce";
import MonthForm from './MonthForm';
import NewDayForm from './NewDayForm';

class MarketControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedMonth: '',
      selectedDay: ''
    };
  }

  handleDayChange = (newDay) =>
    this.setState({ selectedDay: newDay });

  handleMonthChange = (newMonth) =>
    this.setState({ selectedMonth: newMonth });

  render() {
    const { selectedMonth, selectedDay } = this.state;
    const selectedProduce = availableProduce.find(month => month.month === selectedMonth);
    const selectedSchedule = marketSchedule.find(schedule => schedule.day === selectedDay);

    return (
      < React.Fragment >
        <MonthForm
          onMonthChange={this.handleMonthChange} />
        <NewDayForm
          onDayChange={this.handleDayChange} />
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

        {selectedSchedule && (
          <div>
            <h2>{selectedSchedule.day}</h2>
            <p>Location: {selectedSchedule.location}</p>
            <p>Hours: {selectedSchedule.hours}</p>
            <p>Booth: {selectedSchedule.booth}</p>
          </div>
        )}
      </React.Fragment >
    );
  }
}

export default MarketControl



import React from 'react';
import MarketSchedule from './MarketSchedule';

function NewDayForm(props) {
  return (
    <React.Fragment>
      <h3>{props.day}</h3>
      <p>{props.location}</p>
      <p>{props.hours}</p>
      <p>{props.booth}</p>
    </React.Fragment>
  )
}

export default NewDayForm;
import React from 'react';

function NewDayForm(props) {
  const handleSelectChange = (event) => {
    props.onDayChange(event.target.value);
  };

  return (
    <React.Fragment>
      <h3>Find us today at:</h3>
      <label htmlFor="daySelect">Select a day of the week</label>
      <select id="daySelect" name="day" onChange={handleSelectChange}>
        <option value="Sunday">Sunday</option>
        <option value="Monday">Monday</option>
        <option value="Tuesday">Tuesday</option>
        <option value="Wednesday">Wednesday</option>
        <option value="Thursday">Thursday</option>
        <option value="Friday">Friday</option>
        <option value="Saturday">Saturday</option>
        </select>
    </React.Fragment>
  )
}

export default NewDayForm;
import React from "react";

function MonthForm(props) {
  const handleSelectChange = (event) => {
    props.onMonthChange(event.target.value);
  };

  return (
    <React.Fragment>
      <h3>View Monthy Produce</h3>
      <label htmlFor="monthSelect">Select a month of the Year</label>
      <select id="monthSelect" name="month" onChange={handleSelectChange}>
        <option value="January">January</option>
        <option value="February">February</option>
        <option value="March">March</option>
        <option value="April">April</option>
        <option value="May">May</option>
        <option value="June">June</option>
        <option value="July">July</option>
        <option value="August">August</option>
        <option value="September">September</option>
        <option value="October">October</option>
        <option value="November">November</option>
        <option value="December">December</option>
      </select>
    </React.Fragment>
  )
}

export default MonthForm;
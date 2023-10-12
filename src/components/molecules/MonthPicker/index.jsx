// eslint-disable-next-line no-unused-vars
// import styled from 'styled-components/macro';
import { useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import { MonthHolder } from './MonthPicker.styles';

function MonthPicker() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <MonthHolder>
      <button type="button" className="btnPrev">
        <i className="icon-chevron-down" />
      </button>
      <button type="button" className="btnNext">
        <i className="icon-chevron-down" />
      </button>
      <ReactDatePicker
        selected={startDate}
        onChange={date => setStartDate(date)}
        dateFormat="MMM yyyy"
        showMonthYearPicker
        showFullMonthYearPicker
      />
    </MonthHolder>
  );
}

export default MonthPicker;

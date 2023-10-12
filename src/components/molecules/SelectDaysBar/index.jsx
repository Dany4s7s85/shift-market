// eslint-disable-next-line no-unused-vars
import styled from 'styled-components/macro';
import ReactDateRange from '../DatePicker';
import { DayList } from './SelectDaysBar.styles';

function SelectDaysBar() {
  return (
    <DayList>
      <button type="button">Today</button>
      <button type="button">Weekly</button>
      <button type="button">Monthly </button>
      <button type="button">Yearly</button>
      <button type="button">
        {/* <span className="icon-calendar" /> */}
        <ReactDateRange />
      </button>
    </DayList>
  );
}

export default SelectDaysBar;

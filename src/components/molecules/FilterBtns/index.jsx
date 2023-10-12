/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useContextHook } from 'use-context-hook';
// eslint-disable-next-line no-unused-vars
import styled from 'styled-components/macro';
import { startOfWeek, endOfWeek, startOfMonth, addDays, startOfDay, subDays, endOfDay } from 'date-fns';
import DatePicker from 'react-datepicker';
import { BtnsList, Button, FiltersHolder } from './FilterBtns.style';
import { AuthContext } from '../../../context/authContext';

function FilterBtns({ onFilterChange = () => {} }) {
  const { loading, user } = useContextHook(AuthContext, v => ({
    loading: v.loading,
    user: v.user,
  }));
  const [status, setStatus] = useState('Month');
  const [startDate, setStartDate] = useState(new Date());

  useEffect(() => {
    switch (status) {
      case 'Today':
        // onFilterChange({
        //   startDate: startOfDay(new Date()).toISOString(),
        //   endDate: endOfDay(new Date()).toISOString(),
        //   key: 'selection',
        //   year: false,
        // });
        break;
      case 'Week':
        // onFilterChange({
        //   startDate: addDays(startOfWeek(new Date()), 1).toISOString(),
        //   endDate: endOfWeek(new Date()).toISOString(),
        //   key: 'selection',
        //   year: false,
        // });
        break;
      case 'Month':
        // onFilterChange({
        //   startDate: addDays(startOfMonth(new Date()), 1).toISOString(),
        //   endDate: addDays(
        //     startOfMonth(new Date()),
        //     new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate(),
        //   ).toISOString(),
        //   key: 'selection',
        //   year: false,
        // });
        break;
      case 'Custom':
        break;
      default:
        // onFilterChange({
        //   startDate: user?.created_at ? new Date(user?.created_at).toISOString() : addDays(new Date(), -365),
        //   endDate: getDateObject().toISOString(),
        //   key: 'selection',
        //   year: true,
        // });
        break;
    }
  }, [status]);

  function ExampleCustomInput({ value, onClick }) {
    return (
      <Button
        type="button"
        onClick={() => {
          onClick();
          setStatus('Custom');
        }}
        className={status === 'Custom' ? 'active' : ''}>
        <i className="icon-calendar" />
      </Button>
    );
  }

  return (
    <FiltersHolder>
      <BtnsList>
        <Button type="button" onClick={() => setStatus('Today')} className={status === 'Today' ? 'active' : ''}>
          Today
        </Button>
        <Button type="button" onClick={() => setStatus('Week')} className={status === 'Week' ? 'active' : ''}>
          Week
        </Button>
        <Button type="button" onClick={() => setStatus('Month')} className={status === 'Month' ? 'active' : ''}>
          Monthly
        </Button>
        <Button type="button" onClick={() => setStatus('Year')} className={status === 'Year' ? 'active' : ''}>
          Yearly
        </Button>
        <DatePicker selected={startDate} onChange={date => setStartDate(date)} customInput={<ExampleCustomInput />} />
      </BtnsList>
    </FiltersHolder>
  );
}

export default FilterBtns;

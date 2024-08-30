import React, { useState } from 'react';
import {Calendar} from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './MyCalendar.css';
import { SetMyDate } from '../../redux/userSlice';
import { useDispatch} from 'react-redux';

function MyCalendar() {
    const [selectedDate, setSelectedDate] = useState(new Date());

    const dispatch  = useDispatch();
dispatch(SetMyDate(selectedDate));
    console.log(selectedDate);


  return (
    <div className='calendar-container'>
        <Calendar onChange={setSelectedDate} value={selectedDate} />
    </div>
  )
}

export default MyCalendar
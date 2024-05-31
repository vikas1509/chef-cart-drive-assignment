import React, { useState } from 'react';
import { FaRegCalendarAlt } from "react-icons/fa";
import { LuAlarmClock } from "react-icons/lu";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function DateTimeCard() {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className='date-time-card'>
      <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
      {/* Time input with watch icon */}
      <input type="time" />
    </div>
  );
}

export default DateTimeCard;

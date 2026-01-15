import {useState} from 'react';

import {DayPicker} from 'react-day-picker';
import { ru } from "react-day-picker/locale";

import TimePick from './TimePick';

import "react-day-picker/style.css";

const DayPick = () => {
  const [selectedDay, setSelectedDay] = useState();
  const handleSelect = (newSelected: any) => {
    setSelectedDay(newSelected);
  };
  return (
    <div className="bookingBlock">
      <DayPicker mode={'single'}
                 selected={selectedDay}
                 onSelect={handleSelect}
                 required={true}
                 locale={ru}
                 className={'dayPicker'}/>
      <TimePick selectedDay={selectedDay} />
    </div>
  )
}

export default DayPick;
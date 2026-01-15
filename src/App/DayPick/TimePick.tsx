const TimePick = ({selectedDay}: any) => {

  return (
    selectedDay ? <ul className="TimePick">
        <li className="timeZone">12:00-12:50</li>
        <li className="timeZone">12:00-12:50</li>
        <li className="timeZone">12:00-12:50</li>
        <li className="timeZone">12:00-12:50</li>
        <li className="timeZone">12:00-12:50</li>
        <li className="timeZone">12:00-12:50</li>
        <li className="timeZone">12:00-12:50</li>
        <li className="timeZone">12:00-12:50</li>
        <li className="timeZone">12:00-12:50</li>
        <li className="timeZone">12:00-12:50</li>
      </ul> : null
  )
}

export default TimePick;
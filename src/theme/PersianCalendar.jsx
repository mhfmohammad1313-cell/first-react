import { useState } from "react";
import { Calendar } from "@mrasti/jalali-react-calendar";
import "@mrasti/jalali-react-calendar/styles.css";

export default function PCalendar() {
    const [date, setDate] = useState();

    return (
      <>
        <div className="d-flex align-items-center justify-content-center p-2">
          <Calendar
            calendarSystem="jalali"
            mode="single"
            selected={date}
            onSelect={setDate}
          />
        </div>
      </>
    );
}
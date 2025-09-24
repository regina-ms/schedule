import { useEffect, useState } from "react";
import Cell from "./Cell.tsx";
import { getFormattedDate } from "./features/getFormattedData.ts";
import type { CalendarProps } from "./types.ts";
import { getDays, getTimeSlots } from "./features/getTimeSlotsAndDays.ts";

function Calendar({
  lessons,
  schedule,
  view,
  startDate = new Date().toString(),
}: CalendarProps) {
  const [timestamps, setTimestamps] = useState<number[]>([]);
  const timeSlots = getTimeSlots();

  useEffect(() => {
    const days = getDays(view);
    setTimestamps(
      days.map(
        (_, index) =>
          new Date(startDate).setHours(0, 0, 0) + index * 86_400_000,
      ),
    );
  }, [startDate, view]);

  const createCalendarHeader = () => {
    return (
      <>
        <div className={"justify-self-end p-2.5"}>Time Slots</div>
        {timestamps.map((data) => {
          const { month, weekDay, day } = getFormattedDate(data);
          return (
            <div
              data-date={`${data}`}
              className={"p-2.5"}
            >{`${weekDay}, ${day} ${month}`}</div>
          );
        })}
      </>
    );
  };

  const createCalendar = () => {
    const days = getDays(view);
    return timeSlots.map((time) => {
      return (
        <>
          <div
            data-time={time.hour + ":" + time.minute}
            className={"justify-self-end p-2.5"}
          >
            {time.hour + ":" + time.minute}
          </div>
          {days.map((day) => {
            const timestamp =
              timestamps[day] +
              time.minute * 1000 * 60 +
              time.hour * 1000 * 60 * 60;

            const busyCell = !!lessons?.find(
              (lesson) =>
                new Date(lesson.startTime).getTime() < timestamp &&
                new Date(lesson.endTime).getTime() > timestamp - 1000,
            );

            const lesson = lessons?.find(
              (lesson) => new Date(lesson.startTime).getTime() === timestamp,
            );

            const isAvailable = !!schedule?.find((slot) => {
              return (
                new Date(slot.startTime).getTime() <= timestamp &&
                new Date(slot.endTime).getTime() >= timestamp - 1000
              );
            });

            return (
              <Cell
                isBusy={busyCell}
                lesson={lesson}
                isAvailable={isAvailable}
              />
            );
          })}
        </>
      );
    });
  };

  const cols = view === "day" ? 2 : view === "3days" ? 4 : 8;

  return (
    <div
      className={
        "overflow-x-auto md:overflow-x-hidden min-w-[800px] max-w-[1800px] w-fit "
      }
    >
      <div className={`grid grid-cols-${cols}`}>
        {createCalendarHeader()}
        {createCalendar()}
      </div>
    </div>
  );
}

export default Calendar;

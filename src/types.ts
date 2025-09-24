export type Lesson = {
  id: number;
  duration: number;
  startTime: string;
  endTime: string;
  student: string;
};

export type SchedulePart = {
  startTime: string;
  endTime: string;
};

export type CalendarProps = {
  lessons: Lesson[];
  startDate: string;
  schedule: SchedulePart[];
  view: "day" | "3days" | "week"
};

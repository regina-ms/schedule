import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Calendar from "./Calendar.tsx";

const LESSONS_DATA = [
  {
    id: 52,
    duration: 90,
    startTime: "2025-09-25T13:30:00+00:00",
    endTime: "2025-09-25T14:59:59+00:00",
    student: "Alex",
  },

  {
    "id": 2,
    "duration": 60,
    "startTime": "2025-09-28T14:00:00+00:00",
    "endTime": "2025-09-28T14:59:59+00:00",
    "student": "Maria"
  },
  {
    "id": 3,
    "duration": 30,
    "startTime": "2025-09-30T09:30:00+00:00",
    "endTime": "2025-09-30T09:59:59+00:00",
    "student": "John"
  },

  {
    "id": 5,
    "duration": 60,
    "startTime": "2025-10-03T16:00:00+00:00",
    "endTime": "2025-10-03T16:59:59+00:00",
    "student": "Michael"
  },
  {
    "id": 6,
    "duration": 30,
    "startTime": "2025-10-05T08:30:00+00:00",
    "endTime": "2025-10-05T08:59:59+00:00",
    "student": "Emma"
  },
  {
    "id": 7,
    "duration": 90,
    "startTime": "2025-10-06T11:00:00+00:00",
    "endTime": "2025-10-06T12:29:59+00:00",
    "student": "Alex"
  },

  {
    "id": 9,
    "duration": 30,
    "startTime": "2025-10-08T10:00:00+00:00",
    "endTime": "2025-10-08T10:29:59+00:00",
    "student": "John"
  },

  {
    "id": 11,
    "duration": 60,
    "startTime": "2025-09-23T09:00:00+00:00",
    "endTime": "2025-09-23T09:59:59+00:00",
    "student": "Michael"
  },
  {
    "id": 12,
    "duration": 30,
    "startTime": "2025-09-25T14:30:00+00:00",
    "endTime": "2025-09-25T14:59:59+00:00",
    "student": "Emma"
  },

  {
    "id": 14,
    "duration": 60,
    "startTime": "2025-10-04T17:00:00+00:00",
    "endTime": "2025-10-04T17:59:59+00:00",
    "student": "Maria"
  },
  {
    "id": 15,
    "duration": 30,
    "startTime": "2025-10-10T08:00:00+00:00",
    "endTime": "2025-10-10T08:29:59+00:00",
    "student": "John"
  }
];

const SCHEDULE = [
  {
    startTime: "2025-09-23T20:30:00+00:00",
    endTime: "2025-09-24T02:29:59+00:00",
  },
  {
    startTime: "2025-09-25T01:30:00+00:00",
    endTime: "2025-09-25T04:59:59+00:00",
  },
  {
    startTime: "2025-09-25T11:00:00+00:00",
    endTime: "2025-09-25T19:29:59+00:00",
  },
  {
    startTime: "2025-09-27T02:30:00+00:00",
    endTime: "2025-09-27T06:59:59+00:00",
  },
  {
    startTime: "2025-09-28T23:00:00+00:00",
    endTime: "2025-09-29T08:29:59+00:00",
  },
  {
    startTime: "2025-09-30T22:30:00+00:00",
    endTime: "2025-09-31T02:29:59+00:00",
  },
  {
    startTime: "2025-10-01T01:30:00+00:00",
    endTime: "2025-10-01T04:59:59+00:00",
  },
  {
    startTime: "2025-10-01T11:00:00+00:00",
    endTime: "2025-10-01T19:29:59+00:00",
  },
];

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Calendar
      lessons={LESSONS_DATA}
      schedule={SCHEDULE}
      startDate={new Date().toString()}
      view={"week"}
    />
  </StrictMode>,
);

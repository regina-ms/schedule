

export function getTimeSlots() {
  const timeSlots: { hour: number; minute: number }[] = [];
  for (let hour = 0; hour < 24; hour++) {
    timeSlots.push({ hour, minute: 0 });
    timeSlots.push({ hour, minute: 30 });
  }
  return timeSlots;
}

export function getDays(view?: "day" | "3days" | "week") {
  const days: number[] = [];
  const daysCount = view === "day" ? 1 : view === "3days" ? 3 : 7;
  for (let i = 0; i < daysCount; i++) {
    days.push(i);
  }

  return days;
}

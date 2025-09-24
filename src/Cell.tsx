import type { Lesson } from "./types.ts";

type Props = {
  isBusy?: boolean;
  lesson?: Lesson;
  isAvailable?: boolean;
};

const Cell = ({ isBusy, lesson, isAvailable }: Props) => {
  let classes = "";

  if (isAvailable) {
    classes = "bg-green-200 hover:bg-green-300";
  }

  if (lesson) {
    const span = lesson.duration / 30;
    classes = `row-span-${span} bg-red-300 hover:bg-red-400`;
  }

  if (isBusy) {
    classes = "hidden";
  }

  const availableFull = isAvailable && !lesson && !isBusy;

  const onSlotSelect = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (availableFull) {
      if (e.currentTarget !== e.target) return;
      e.currentTarget.classList.toggle("available");
      e.currentTarget.classList.toggle("bg-green-300");
      return;
    }

    if (lesson) {
      e.currentTarget.classList.toggle("lesson");
      e.currentTarget.classList.toggle("bg-red-400");
      return;
    }
  };

  return (
    <div
      onClick={onSlotSelect}
      className={`relative p-2.5 group border bg-gray-100 hover:bg-gray-200 cursor-pointer flex items-center justify-center ${classes}`}
      title={
        lesson &&
        `${new Date(lesson.startTime).toLocaleTimeString()} - ${new Date(lesson.endTime).toLocaleTimeString()}`
      }
    >
      {lesson && `${lesson.student}, ${lesson.duration} min`}
      {availableFull && (
        <div
          className={
            "w-1/2 min-h-20 group-[.available]:flex hidden  p-3 items-center justify-center"
          }
        >
          <button className={"border p-2.5 cursor-pointer bg-white"}>Add lesson</button>
        </div>
      )}
      {lesson && (
        <div
          className={
            "absolute left-1/2 -translate-x-1/2 w-1/2 min-h-20 bg-gray-400 group-[.lesson]:flex hidden z-10 p-3 top-full flex-col"
          }
        >
          <span>Remove lesson</span>
          <span>Edit info lesson</span>
        </div>
      )}
    </div>
  );
};

export default Cell;

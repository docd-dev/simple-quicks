import { DateTime } from "luxon";

export const formatTime = (dateString: string) => {
  return DateTime.fromSQL(dateString).toFormat("HH:mm");
};

export const formatDate = (dateString: string) => {
  const date = DateTime.fromSQL(dateString);
  const today = DateTime.local();

  const isToday = date.hasSame(today, "day");

  if (isToday) {
    return `Today ${date.toFormat("MMMM dd, yyyy")}`;
  }

  return date.toFormat("cccc MMMM dd, yyyy");
};

export const timeLeft = (
  futureDate: any,
  type: "ISO" | "JSDate" = "ISO"
): string => {
  const today = DateTime.now();
  let future;

  if (type === "JSDate") {
    future = DateTime.fromJSDate(futureDate);
  } else {
    future = DateTime.fromISO(futureDate);
  }

  // Check if the future date is before today
  if (future < today) {
    return "Overdue";
  }

  const diff = future.diff(today, ["years", "months", "weeks", "days"]);

  if (diff.years >= 1) {
    const yearsLeft = Math.ceil(diff.years);
    return `${yearsLeft} Year${yearsLeft > 1 ? "s" : ""} Left`;
  } else if (diff.months >= 1) {
    const monthsLeft = Math.ceil(diff.months);
    return `${monthsLeft} Month${monthsLeft > 1 ? "s" : ""} Left`;
  } else if (diff.weeks >= 1) {
    const weeksLeft = Math.ceil(diff.weeks);
    return `${weeksLeft} Week${weeksLeft > 1 ? "s" : ""} Left`;
  } else {
    const daysLeft = Math.ceil(diff.days);
    return `${daysLeft} Day${daysLeft > 1 ? "s" : ""} Left`;
  }
};

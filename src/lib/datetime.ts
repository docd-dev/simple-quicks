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

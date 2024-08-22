import { DateTime } from "luxon";

// Type Definition
export type Task = {
  id: string;
  name: string;
  description: string;
  dueDate: string;
  isCompleted: boolean;
};

// Unique IDs and due dates
export const TASK_LIST: Task[] = [
  {
    id: "task_1",
    name: "Close off Case #012920- RODRIGUES, Amiguel",
    description:
      "Closing off this case since this application has been cancelled. No one really understands how this case could possibly be cancelled. The options and the documents within this document were totally a guarantee for success!",
    dueDate: DateTime.now().plus({ days: 2 }).toISODate(),
    isCompleted: false,
  },
  {
    id: "task_2",
    name: "Set up documentation report for several Cases : Case 145443, Case 192829 and Case 182203",
    description:
      "All Cases must include all payment transactions, all documents and forms filled. All conversations in comments and messages in channels and emails should be provided as well.",
    dueDate: DateTime.now().plus({ days: 3 }).toISODate(),
    isCompleted: false,
  },
  {
    id: "task_3",
    name: "Set up appointment with Dr Blake",
    description: "",
    dueDate: DateTime.now().plus({ days: 4 }).toISODate(),
    isCompleted: false,
  },
  {
    id: "task_4",
    name: "Contact Mr Caleb - video conference?",
    description: "",
    dueDate: DateTime.now().minus({ days: 2 }).toISODate(),
    isCompleted: true,
  },
  {
    id: "task_5",
    name: "Assign 3 homework to Client A",
    description:
      "Homeworks needed to be checked are as follows: Client Profile Questionnaire, Passport Requirements and Images, Personal Documents.",
    dueDate: DateTime.now().minus({ days: 3 }).toISODate(),
    isCompleted: true,
  },
];

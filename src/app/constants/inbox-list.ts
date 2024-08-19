// Define the types
interface Message {
  name: string;
  message: string;
}

export interface InboxItem {
  title: string;
  date: string;
  lastMessage?: Message;
  new?: boolean;
  isSupport?: boolean;
}

// Define the list with the appropriate type
export const INBOX_LIST: InboxItem[] = [
  {
    title: "109220-Naturalization",
    date: "January 1, 2021 19:10",
    lastMessage: {
      name: "Cameron Phillips",
      message: "Please check this out!",
    },
  },
  {
    title:
      "Jeannette Moraima Guaman Chamba (Hutto I-589) [ Hutto Follow Up - Brief Service ]",
    date: "02/06/2021 10:45",
    lastMessage: {
      name: "Ellen",
      message: "Hey, please read.",
    },
  },
  {
    title: "8405-Diana SALAZAR MUNGUIA",
    date: "01/06/2021 12:19",
    lastMessage: {
      name: "Cameron Phillips",
      message:
        "I understand your initial concerns and that's very valid, Elizabeth. But you...",
    },
  },
  {
    title: "FastVisa Support",
    date: "01/06/2021 12:19",
    lastMessage: {
      name: "FastVisa Support",
      message: "Hey there! Welcome to your inbox.",
    },
    isSupport: true,
  },
];

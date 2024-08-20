type Sender = {
  id: number | string;
  username: string;
  name: string;
};

export type Message = {
  id: number;
  room_id: string;
  message: string;
  date: string;
  reply_id: number | null;
  sender: Sender;
  isNew: boolean;
};

export const MESSAGE_LIST: Message[] = [
  {
    id: 1,
    room_id: "1a2b3c",
    message: "No worries. It will be completed ASAP. I've asked him yesterday.",
    date: "2024-08-19 19:32",
    reply_id: null,
    sender: {
      id: "docd",
      username: "dwiyulianto",
      name: "Dwi Yulianto",
    },
    isNew: false,
  },
  {
    id: 2,
    room_id: "1a2b3c",
    message:
      "Hello Obaidullah, I will be your case advisor for case #029290. I have assigned some homework for you to fill. Please keep up with the due dates. Should you have any questions, you can message me anytime. Thanks.",
    date: "2024-08-20 19:32",
    reply_id: null,
    sender: {
      id: 2,
      username: "maryhilda",
      name: "Mary Hilda",
    },
    isNew: false,
  },
  {
    id: 3,
    room_id: "1a2b3c",
    message:
      "Please contact Mary for questions regarding the case bcs she will be managing your forms from now on! Thanks Mary.",
    date: "2024-08-20 19:32",
    reply_id: null,
    sender: {
      id: "docd",
      username: "dwiyulianto",
      name: "Dwi Yulianto",
    },
    isNew: false,
  },
  {
    id: 4,
    room_id: "1a2b3c",
    message: "Sure thing, Claren",
    date: "2024-08-20 19:32",
    reply_id: null,
    sender: {
      id: 2,
      username: "maryhilda",
      name: "Mary Hilda",
    },
    isNew: false,
  },
  {
    id: 5,
    room_id: "1a2b3c",
    message: "Morning. I'll try to do them. Thanks",
    date: "2024-08-20 19:32",
    reply_id: null,
    sender: {
      id: 1,
      username: "obaidullah",
      name: "Obaidullah Amarkhil",
    },
    isNew: true,
  },
];

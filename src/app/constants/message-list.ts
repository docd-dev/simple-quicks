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

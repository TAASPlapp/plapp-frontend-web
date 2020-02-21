import {UserInfo} from "./UserInfo";

export class Comment {
  id: number;
  fromUser: UserInfo;
  toStroyboardItemId: number;
  publishedAt: Date;
  content: string;
}


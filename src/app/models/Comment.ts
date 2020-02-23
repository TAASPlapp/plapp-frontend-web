import {UserDetails} from "./UserDetails";
import {MediaContentType} from "./MediaContentType";

export class Comment {
  id: number;
  mediaContentType : MediaContentType;
  fromUser: UserDetails;
  itemId: number;
  publishedAt: Date;
  content: string;
}


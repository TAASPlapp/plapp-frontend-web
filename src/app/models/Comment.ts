import {UserDetails} from "./UserDetails";
import {MediaContentType} from "./MediaContentType";

export class Comment {
  id: number;
  author: UserDetails;
  mediaContentType : MediaContentType;
  itemId: number;
  publishedAt: Date;
  content: string;
}


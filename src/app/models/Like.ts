import {MediaContentType} from "./MediaContentType";
import {UserDetails} from "./UserDetails";

export class Like {
  id: number;
  mediaContentType : MediaContentType;
  itemId: number;
  author: UserDetails;
  publishedAt: Date;
}


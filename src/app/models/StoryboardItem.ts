import {Status} from "./Status";

export class StoryboardItem {
  id:number;
  image: string;
  thumbImage: string;
  description: string;
  title: string;
  status:Status;
  numLike:number;
}

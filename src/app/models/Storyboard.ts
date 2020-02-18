import {StoryboardItem} from "./StoryboardItem";

export class Storyboard{
  id:number;
  plantID:number;
  summary:string;
  lastModify: Date;
  storyboardItems:StoryboardItem[];
  numLikes: number;
}

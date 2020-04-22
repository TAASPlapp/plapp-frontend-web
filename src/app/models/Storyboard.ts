import {StoryboardItem} from "./StoryboardItem";
import {Plant} from "./Plant";

export class Storyboard{
  id:number;
  plant:Plant;
  summary:string;
  lastModify: Date;
  storyboardItems:StoryboardItem[];
  numLikes: number;
}

import {Status} from "./Status";

export class Plant {
  id: number;
  owner: number;
  name: string;
  description: string;
  type: string;
  status: Status;
  image: string;

  constructor(id, owner, name, descr, type, status, image ){
    this.id = id;
    this.owner = owner;
    this.name = name;
    this.description = descr;
    this.type = type;
    this.status = status;
    this.image = image;
  }

}

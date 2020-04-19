import {Plant} from "../../app/models/Plant";
import {Status} from "../../app/models/Status";

export const PLANTS: Plant[] = [

  {
    description: "Magnificent plant, famous for her passion and glory",
    id: 134325,
    owner: 2434,
    name: "Giorgia",
    type: "Peony",
    status: Status.HEALTHY,
    image: "https://source.unsplash.com/XEmaJaM-4nE/300x300"
  },
  {
    description: "It smells like flowers in the rain after a storm in the desert",
    id: 264574,
    owner: 2434,
    name: "Prosperina",
    type: "Cactus",
    status: Status.HEALTHY,
    image: "https://source.unsplash.com/f7PfM2NklZ4/300x300"
  },
  {
    description: "Thyme and the small white dune-rose also grow in the dunes",
    id: 387587,
    owner: 2434,
    name: "Anita",
    type: "Thyme",
    status: Status.HEALTHY,
    image: "https://source.unsplash.com/Wnr2ohKUIYw/300x300"
  },
  {
    description: "Philodendron is a large genus of flowering plants.",
    id: 45252,
    owner: 2434,
    name: "Sveva",
    type: "Philodendron",
    status: Status.HEALTHY,
    image: "https://source.unsplash.com/N1_pgcSgbEk/300x300"
  }
  ];

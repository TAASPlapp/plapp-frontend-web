import {Storyboard} from "../../app/models/Storyboard";



//TODO: quqesto è quello che mi arriva dal server: aggiungere tutta la Plant secondo me!!! non solo plantID per la parte di social
export const STORYBOARD: Storyboard[] = [
  {
    id: 1,
    plantID: 134325,
    summary: 'The story of my peony named Giorgia',
    lastModify: new Date("2020-02-14T12:56:00"),
    numLikes: 31,
    storyboardItems: [{
      image: 'https://source.unsplash.com/y-5pd18ETbg/600x800',
      thumbImage: 'https://source.unsplash.com/y-5pd18ETbg/600x800',
      alt: 'Peony in flower',
      title: 'Suspiria',
    }, {
      image: 'https://source.unsplash.com/ct_zXHu8rcM/600x800',
      thumbImage: 'https://source.unsplash.com/ct_zXHu8rcM/600x800',
      alt: 'Growing flowers',
      title: 'My funny valentine',

    }, {
      image: 'https://source.unsplash.com/9A_peGrSbZc/600x800',
      thumbImage: 'https://source.unsplash.com/9A_peGrSbZc/600x800',
      alt: 'Solo Flower',
      title: 'New flower',
    }],
  },
  {
    id: 2,
    plantID: 264574,
    summary: 'The story of my cactus named Prosperina',
    lastModify: new Date("2020-01-25T13:23:00"),
    numLikes: 52,
    storyboardItems: [{
      image: 'https://source.unsplash.com/UkH7L-aag8A/600x800',
      thumbImage: 'https://source.unsplash.com/UkH7L-aag8A/600x800',
      alt: 'Peony in flower',
      title: 'Suspiria',

    }, {
      image: 'https://source.unsplash.com/YTc2kHz5L9s/600x800',
      thumbImage: 'https://source.unsplash.com/YTc2kHz5L9s/600x800',
      alt: 'In the air',
      title: 'On Air',

    }, {
      image: 'https://source.unsplash.com/y_yKkAYsQRQ/600x800',
      thumbImage: 'https://source.unsplash.com/y_yKkAYsQRQ/600x800',
      alt: 'Cactus life',
      title: 'Growing Bigger',

    }],
  },
];

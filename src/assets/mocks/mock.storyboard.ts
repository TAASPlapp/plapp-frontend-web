import {Storyboard} from "../../app/models/Storyboard";
import {Status} from "../../app/models/Status";


//todo: mandare le foto delle piante 50x50
export const STORYBOARD: Storyboard[] = [
  {
    id: 1,
    plant: {
      description: "Magnificent plant, famous for her passion and glory",
      id: 134325,
      owner: 2434,
      name: "Giorgia",
      type: "Peony",
      status: Status.HEALTHY,
      image: "https:/source.unsplash.com/XEmaJaM-4nE/50x50"
    },
    summary: 'The story of my peony named Giorgia',
    lastModify: new Date("2020-02-14T12:56:00"),
    numLikes: 31,
    storyboardItems: [{
      id:9891,
      image: 'https://source.unsplash.com/y-5pd18ETbg/600x800',
      thumbImage: 'https://source.unsplash.com/y-5pd18ETbg/800x300',
      description: 'Working on some desk cleanup... I have had a huge pile of finished and unfinished paintings in the corner. I guess it’s about time to finish this Peony painting I started in 2018! 😂 oops! .\n' +
        '.\n' +
        '.\n' +
        '#watercolorpainting #LynnDPrattpaint #watercolor #realisticart #watercolouring #hyperrealism #realisticwatercolor',
      title: 'Suspiria',
      status: Status.HEALTHY,
      numLike: 23,
    }, {
      id:9421,
      image: 'https://source.unsplash.com/ct_zXHu8rcM/600x800',
      thumbImage: 'https://source.unsplash.com/ct_zXHu8rcM/800x300',
      description: ' Happy Saturday! Take a second to soak in these florals by @yasminemei - because THIS is the vibe inspiring our 2020 Spring flora. A flower party in your hand.\n' +
        'Celebratory, Bold, Lush, and S E A S O N A L !\n' +
        'Until Spring comes, we will be over here. Enjoying Saturdays while counting down the days until our own tulips, peonies , poppies, foxglove push through the soil... #patienceisavirtue ? // *sigh*. Hands up if you\'re over these sub-zero temps and ready for those fresh \'n\' fragrant Spring blooms? 🙋‍♀️🙋‍♂️',
      title: 'My funny valentine',
      status: Status.HEALTHY,
      numLike: 2,
    }, {
      id:9851,
      image: 'https://source.unsplash.com/9A_peGrSbZc/600x800',
      thumbImage: 'https://source.unsplash.com/9A_peGrSbZc/600x800',
      description: 'Our peony wall in Amsterdam 🌸💗💗🌸💗 #mypeonysociety #mypeony #peony #peonyaddict #peonyseason',
      title: 'New flower',
      status: Status.HEALTHY,
      numLike: 54,
    }],
  },
  {
    id: 2,
    plant: {
      description: "It smells like flowers in the rain after a storm in the desert",
      id: 264574,
      owner: 2434,
      name: "Prosperina",
      type: "Cactus",
      image: "https://source.unsplash.com/f7PfM2NklZ4/50x50",
      status: Status.HEALTHY,

    },
    summary: 'The story of my cactus named Prosperina',
    lastModify: new Date("2020-01-25T13:23:00"),
    numLikes: 52,
    storyboardItems: [{
      id:951,
      image: 'https://source.unsplash.com/UkH7L-aag8A/600x800',
      thumbImage: 'https://source.unsplash.com/UkH7L-aag8A/600x800',
      description: 'Peony in flower',
      title: 'Flower in summer',
      status: 'Healthy',
      numLike: 54,
    }, {
      id:9861,
      image: 'https://source.unsplash.com/YTc2kHz5L9s/600x800',
      thumbImage: 'https://source.unsplash.com/YTc2kHz5L9s/600x800',
      description: 'In the air',
      title: 'On Air',
      status: Status.HEALTHY,
      numLike: 44,
    }, {
      id:9876,
      image: 'https://source.unsplash.com/y_yKkAYsQRQ/600x800',
      thumbImage: 'https://source.unsplash.com/y_yKkAYsQRQ/600x800',
      description: 'Cactus life',
      title: 'Growing Bigger',
      status: Status.HEALTHY,
      numLike: 25,
    }],
  },
];

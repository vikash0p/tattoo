
interface slider{
    id:number;
    img:string;
    title:string;
}

interface works{
    id:number,
    title:string,
    des:string
}
interface artiest{
  id:number,
  title:string,
  name:string,
  artiest:string,
  img:string

}
export const sliderData:slider[] = [
  {
    id: 1,
    img: "/home/1.jpg",
    title: "TATTOO & PIERCING STUDIO",
  },
  {
    id: 2,
    img: "/home/2.jpg",
    title: "CUSTOM GLASS TATTOOING",
  },
  {
    id: 3,
    img: "/home/3.jpg",
    title: "BE PROUD OF YOUR NEW TATTOO",
  },
  {
    id: 1,
    img: "/home/4.jpg",
    title: "TATTOO & PIERCING STUDIO",
  },
];

export const howToWorks: works[] = [
  {
    id: 1,
    title: "FREE CONSULTATION",
    des: "Email us or come into the shop to discuss your tattoo. Bring your ideas, and we'll guide you on how to make it a tattoo you'll love.",
  },
  {
    id: 2,
    title: "BOOK AN APPOINTMENT",
    des: "Once you’ve decided what you want, we will give you a quote so you can book the date for your tattoo and pay your deposit.",
  },
  {
    id: 3,
    title: " GET YOUR TATTOO",
    des: "When you arrive at the shop, your artist will have your design prepared. Now you settle in and enjoy getting your new tattoo.",
  },
];

export const artiest: artiest[] = [
  {
    id: 1,
    title:
      "Tattoo aliquet miss orci elit gene on tristique in the dream vitaen aliuam loremtincidunt felis sed gravida aliquam the neque miss blue hendren mavition durusapien mana amenta the mollis ",
    name: "Binny",
    artiest: "Piercing Artist",
    img: "/home/7-1.jpg",
  },
  {
    id: 2,
    title:
      "Tattoo aliquet miss orci elit gene on tristique in the dream vitaen aliuam loremtincidunt felis sed gravida aliquam the neque miss blue hendren mavition durusapien mana amenta the mollis ",
    name: "Binny",
    artiest: "Piercing Artist",
    img: "/home/8-1.jpg",
  },
  {
    id: 3,
    title:
      "Tattoo aliquet miss orci elit gene on tristique in the dream vitaen aliuam loremtincidunt felis sed gravida aliquam the neque miss blue hendren mavition durusapien mana amenta the mollis ",
    name: "Binny",
    artiest: "Piercing Artist",
    img: "/home/9-1.jpg",
  },
];


interface service{
  id:number,
  title:string,
  name:string,
  number:string,
  img:string
}

export const service:service[] = [
  {
    id: 1,
    title:
      "Tattoo aliquet miss orci elit gene on tristique in the dream vitaen aliuam loremtincidunt felis sed gravida aliquam the neque miss blue hendren mavition durusapien mana amenta the mollis ",
    name: "TATTOOING",
    number: "01",
    img: "/home/1-2.jpg",
  },
  {
    id: 2,
    title:
      "Tattoo aliquet miss orci elit gene on tristique in the dream vitaen aliuam loremtincidunt felis sed gravida aliquam the neque miss blue hendren mavition durusapien mana amenta the mollis ",
    name: "PIERCING",
    number: "02",
    img: "/home/4-2.jpg",
  },
  {
    id: 3,
    title:
      "Tattoo aliquet miss orci elit gene on tristique in the dream vitaen aliuam loremtincidunt felis sed gravida aliquam the neque miss blue hendren mavition durusapien mana amenta the mollis ",
    name: "LASER REMOVAL",
    number: "03",
    img: "/home/3-2.jpg",
  },
];

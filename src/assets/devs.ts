import { images } from './images';

export interface Dev {
  img: string;
  firstname: string;
  lastname: string;
  role: string;
  about: string;
  profileDesc: string;
  email: string;
}

export const devs: Dev[] = [
  {
    img: images.leon,
    firstname: 'Leon',
    lastname: 'Björklund',
    role: 'UX-designer',
    about:
      '“I like creating and designing intuitive web-apps. I always strive  to create the best experience for the end user as possible.”',
    profileDesc: 'asdasd',
    email: '123123',
  },
  {
    img: images.thomas,
    firstname: 'Thomas',
    lastname: 'Ingvarsson',
    role: 'Front end developer',
    about:
      '“My main hobbies are skateboarding and videogames. I allways like a challenge and to push myself to get better and more confident.”',
    profileDesc: 'asdasd',
    email: '123123',
  },
  {
    img: images.parham,
    firstname: 'Parham',
    lastname: 'Berenjian',
    role: 'Back end developer',
    about: '“I enjoy nature walks and spending time with my family & firends.”',
    profileDesc: 'asdasd',
    email: '123123',
  },
  {
    img: images.edvin,
    firstname: 'Edvin',
    lastname: 'Djulic',
    role: 'Front end developer',
    about:
      '“In my spare time I enjoy working out, watch sports and spend time with family and friends.”',
    profileDesc: 'asdasd',
    email: '123123',
  },
];

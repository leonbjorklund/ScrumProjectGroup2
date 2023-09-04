import { images } from './images';

export interface Dev {
  id: number;
  img: string;
  firstname: string;
  lastname: string;
  role: string;
  comp: string[];
  about: string;
  profileDesc: string;
  email: string;
}

export const devs: Dev[] = [
  {
    id: 1,
    img: images.leon,
    firstname: 'Leon',
    lastname: 'Björklund',
    role: 'UX-designer',
    comp: ['React', ''],
    about:
      '“I like creating and designing intuitive web-apps. I always strive  to create the best experience for the end user as possible.”',
    profileDesc: 'asdasd',
    email: '123123',
  },
  {
    id: 2,
    img: images.thomas,
    firstname: 'Thomas',
    lastname: 'Ingvarsson',
    role: 'Front end developer',
    comp: ['React', 'TS', 'EXPRESS', 'HTML', 'CSS', 'Node.js'],
    about:
      '“My main hobbies are skateboarding and videogames. I allways like a challenge and to push myself to get better and more confident.”',
    profileDesc: 'asdasd',
    email: '123123',
  },
  {
    id: 3,
    img: images.parham,
    firstname: 'Parham',
    lastname: 'Berenjian',
    role: 'Back end developer',
    comp: ['React', 'JS', 'Node.js', 'MongoDB', 'MYSQL'],
    about: '“I enjoy nature walks and spending time with my family & firends.”',
    profileDesc:
      'With a combination of passion and education, my expertice in Back end development has a sturdy foundation and solid structure. I love learning new ways to improve both myself and my code.',
    email: '123123',
  },
  {
    id: 4,
    img: images.edvin,
    firstname: 'Edvin',
    lastname: 'Djulic',
    role: 'Front end developer',
    comp: ['React', ''],
    about:
      '“In my spare time I enjoy working out, watch sports and spend time with family and friends.”',
    profileDesc: 'asdasd',
    email: '123123',
  },
];

import { images } from './images';
import { Project, edvinProjects, leonProjects, parhamProjects, thomasProjects } from './projects';

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
  projects: Project[];
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
      '“I like creating and designing intuitive web-apps. I always strive to create the best experience for the end user as possible.”',
    profileDesc:
      'Leon: With a combination of passion and education, my expertise in Back end development has a sturdy foundation and solid structure. I love learning new ways to improve both myself and my code.',
    email: '123123',
    projects: leonProjects,
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
    profileDesc:
      'My expertise in back-end development is built on a solid foundation of education and fueled by my passion for the field. I am constantly seeking new ways to improve both my skills and my code, and I love the challenge of learning and growing in my craft. With this combination of drive and knowledge, I am confident in my ability to excel as a back-end developer. Is there anything else you would like me to help you with? 😊',
    email: '123123',
    projects: thomasProjects,
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
      'Parham: With a combination of passion and education, my expertice in Back end development has a sturdy foundation and solid structure. I love learning new ways to improve both myself and my code.',
    email: '123123',
    projects: parhamProjects,
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
    profileDesc:
      'Edvin: With a combination of passion and education, my expertice in Back end development has a sturdy foundation and solid structure. I love learning new ways to improve both myself and my code.',
    email: '123123',
    projects: edvinProjects,
  },
];

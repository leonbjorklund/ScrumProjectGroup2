import { thomasProjectImages } from './images';

export interface Project {
  name: string;
  img: string;
  description: string;
  githubLink: string;
  demoLink: string;
}

export const leonProjects: Project[] = [
  {
    name: 'InfiTrak',
    img: 'https://github-production-user-asset-6210df.s3.amazonaws.com/45374596/265699194-be62ff37-e191-4995-990a-75c53f3919cb.png',
    description:
      'Created a fictional company that sells tracking devices, built with React, TypeScript, and Chakra UI. Features a fully functional shopping cart and checkout.',
    githubLink: 'https://github.com/leonbjorklund/infitrak',
    demoLink: 'https://leonbjorklund.github.io/infitrak/',
  },
  {
    name: 'Bubble Tea Webshop',
    img: 'https://github-production-user-asset-6210df.s3.amazonaws.com/45374596/265699188-bae03cfe-99ab-40e1-868b-a2edddc22ab9.png',
    description:
      'A webshop built with React, TypeScript, and Chakra UI, allows customers to order and securely checkout. Admins can dynamically add or edit products.',
    githubLink: 'https://github.com/leonbjorklund/bubbletea-webshop',
    demoLink: 'https://bobabliss.netlify.app/',
  },
  {
    name: 'Save Gothenburg Game',
    img: 'https://github-production-user-asset-6210df.s3.amazonaws.com/45374596/265699195-ccff7426-2763-4730-8980-b14d24d6d8e3.png',
    description:
      'A group project where we built a simple, original game created using TypeScript with p5, a JS-library for animations etc.',
    githubLink: 'https://github.com/FED22GBGTeam1/GBGspel',
    demoLink: 'https://save-gothenburg.netlify.app/',
  },
  {
    name: 'Whispr',
    img: 'https://github-production-user-asset-6210df.s3.amazonaws.com/45374596/265699199-de2eff55-7db5-49cb-aa48-b5719c898da2.png',
    description:
      'My first attempt at a React fullstack project using Firebase for backend & hosting, enabling users to create and like text posts in a real-time environment.',
    githubLink: 'https://github.com/leonbjorklund/whispr',
    demoLink: 'https://whispr-e3191.web.app/',
  },
  {
    name: 'Calendar App',
    img: 'https://github-production-user-asset-6210df.s3.amazonaws.com/45374596/265485605-0abcad9a-978a-47d9-8971-158963fcce92.png',
    description:
      'A calendar built with vanilla JavaScript, allows users to create to-dos that are placed on specific dates. Used Cypress end to end testing.',
    githubLink: 'https://github.com/leonbjorklund/JS-calendar',
    demoLink: 'https://leonbjorklund.github.io/JS-calendar/',
  },
  {
    name: 'CraigsList',
    img: 'https://github-production-user-asset-6210df.s3.amazonaws.com/45374596/265699192-e1948c80-aeff-440c-9754-fa9b451905fc.png',
    description:
      'Our craigslist redesign features a cleaner, more minimalistic look, making it easier for users to navigate the site with less distractions.',
    githubLink: 'https://github.com/leonbjorklund/craigslist-redesign',
    demoLink: 'https://leonbjorklund.github.io/craigslist-redesign/',
  },
];

export const thomasProjects: Project[] = [
  {
    name: 'Clone Apple homepage',
    img: thomasProjectImages.apple,
    description:
      'Made the startpage of apple.com from sratch with my classmate Simon Bengtsson. Html & Css used.',
    githubLink: 'https://github.com/GunnarIng/Apple-frontpage-copy',
    demoLink: 'https://gunnaring.github.io/Apple-frontpage-copy/',
  },
  {
    name: 'Small Church Music',
    img: thomasProjectImages.church,
    description: 'Project was to take an old webpage and modernise it. Using HTML & CSS only',
    githubLink: 'href="https://gunnaring.github.io/Apple-frontpage-copy/',
    demoLink: 'href="https://gunnaring.github.io/Inl-mning-2-Old-website/',
  },
  {
    name: 'E-commerce website',
    img: thomasProjectImages.gents,
    description:
      'It has a working cart and checkout. You can modify orders, fill out a checkout form to place them, and access an admin user to manage products. Uses Yup for validation.',
    githubLink: 'https://github.com/GunnarIng/react-webshop',
    demoLink: 'https://gentshat.netlify.app/',
  },
  {
    name: 'Moon Mission',
    img: thomasProjectImages.moon,
    description: 'Space game using javascript and p5 library',
    githubLink: 'https://github.com/GunnarIng/moon-mission',
    demoLink: 'https://lysmac.github.io/moon-mission/',
  },
  {
    name: 'The quizie-quiz',
    img: thomasProjectImages.quiz,
    description: 'A quiz game built with React TS and JSS using an API for the whole game.',
    githubLink: 'https://github.com/GunnarIng/Quiz-TLS',
    demoLink: 'href="https://quiziequiz.netlify.app/',
  },
];

export const parhamProjects: Project[] = [
  {
    name: 'K9LIFE',
    img: 'https://github.com/leonbjorklund/ScrumProjectGroup2/assets/114247302/9c32f676-a8ee-4954-9c4c-e6bd9012b7fd',
    description: 'Everything for dogs and dog care concept site',
    githubLink: 'https://github.com/ParhamInBinary/K9LIFE',
    demoLink: 'https://k9life.netlify.app/',
  },
  {
    name: 'STORM weather app by PAMEDA',
    img: 'https://github.com/leonbjorklund/ScrumProjectGroup2/assets/114247302/7f5f600c-902f-461a-99ae-ebc0e85157e1',
    description: 'Check the weather anywhere in the world',
    githubLink: 'https://github.com/ParhamInBinary/Miniprojekt-ReactApp',
    demoLink: 'https://stormweatherappbypameda.netlify.app/',
  },
  {
    name: 'Etch-N-Sketch',
    img: 'https://github.com/leonbjorklund/ScrumProjectGroup2/assets/114247302/2643293b-c9be-4bf1-9193-af9a2e481bab',
    description: 'Recreation of the old Etch-A-Sketch toy',
    githubLink: 'https://github.com/ParhamInBinary/Etch-N-Sketch',
    demoLink: 'https://parhaminbinary.github.io/Etch-N-Sketch/',
  },
  {
    name: 'The grifters game',
    img: 'https://github.com/leonbjorklund/ScrumProjectGroup2/assets/114247302/b792261b-8b99-49c4-ac9b-32af59e45361',
    description: 'Classic cup game of grifters. Place your bet and good luck!',
    githubLink: 'https://github.com/ParhamInBinary/The-grifters-game',
    demoLink: 'https://parhaminbinary.github.io/The-grifters-game/',
  },
  {
    name: 'Moon Mission',
    img: thomasProjectImages.moon,
    description: 'Space game using javascript and p5 library',
    githubLink: 'https://github.com/GunnarIng/moon-mission',
    demoLink: 'https://lysmac.github.io/moon-mission/',
  },
  {
    name: 'Calendar App',
    img: 'https://github-production-user-asset-6210df.s3.amazonaws.com/45374596/265485605-0abcad9a-978a-47d9-8971-158963fcce92.png',
    description:
      'A calendar built with vanilla JavaScript, allows users to create to-dos that are placed on specific dates. Used Cypress end to end testing.',
    githubLink: 'https://github.com/leonbjorklund/JS-calendar',
    demoLink: 'https://leonbjorklund.github.io/JS-calendar/',
  },
];

export const edvinProjects: Project[] = [
  {
    name: 'Simiflix ',
    img: 'https://github.com/leonbjorklund/ScrumProjectGroup2/assets/117123951/9fdaf483-c34a-469d-9eda-af40a7c80841',
    description: 'Simiflix is a web platform that uses an API to offer movie recommendations based on your search. Created with React, Typescript and uses an API from themoviedb.org',
    githubLink: 'https://github.com/Edvindjulic/Simiflix/',
    demoLink: 'https://simiflix.netlify.app/',
  },
  {
    name: 'Frostbite Frenzy',
    img: 'https://github.com/leonbjorklund/ScrumProjectGroup2/assets/117123951/688fa591-41c5-4653-94e2-df426a80e4ad',
    description: 'In Frostbite Frenzy players navigate a dynamically generated maze using Typescript and p5.js. to avoid monsters and collect keys. The game is developed for two players. ',
    githubLink: 'https://github.com/Edvindjulic/Frostbite-Frenzy/',
    demoLink: 'https://frostbite-frenzy.netlify.app/',
  },
  {
    name: 'Javascript calendar',
    img: 'https://github.com/leonbjorklund/ScrumProjectGroup2/assets/117123951/ffe42b45-c883-45c0-b60e-21da716c2cf3',
    description: 'The calendar is made with vanilla Javascript and allows users to create to-dos that are placed on specific dates.',
    githubLink: 'https://github.com/Edvindjulic/Calendar-Javascript',
    demoLink: 'https://vanillajavascript-calendar.netlify.app/',
  },
  {
    name: 'RetroCap',
    img: 'https://github.com/leonbjorklund/ScrumProjectGroup2/assets/117123951/f3845325-4d32-44c6-abdd-5b36e4508010',
    description: 'RetroCap is a fictive brand that sells caps with famous movie quotes on them. The main focus of this project was to create and implement a graphic profile where everything was made from scratch.',
    githubLink: 'https://github.com/Edvindjulic/Retro-Cap',
    demoLink: 'https://retrocaps.netlify.app/',
  },
  {
    name: 'Ski-doo',
    img: 'https://github.com/leonbjorklund/ScrumProjectGroup2/assets/117123951/b6a17eed-8d4d-4ee2-b252-967298d80ed4',
    description: 'Ski-doo is a webshop that sells snowmobiles. The project was created using React, Typescript and Material UI. Everything saved gets stored in local storage as no database was used for this project. ',
    githubLink: 'https://github.com/Edvindjulic/Ski-doo-React-Webshop',
    demoLink: 'https://ski-doo-webshop.netlify.app/',
  },
  {
    name: 'VUE 3 API',
    img: 'https://github.com/leonbjorklund/ScrumProjectGroup2/assets/117123951/a4aae71f-c025-427a-9ecf-ed612731f05c',
    description: 'This small project was created to learn the basics of Vue 3 and how to fetch data from an API aswell as using pagination to display the data.',
    githubLink: 'https://github.com/Edvindjulic/VUE-3-koduppgift',
    demoLink: 'https://edvin-djulic-koduppgift.netlify.app/',
  },
];

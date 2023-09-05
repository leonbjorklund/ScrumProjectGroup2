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
    name: 'Parham project 1',
    img: 'https://github-production-user-asset-6210df.s3.amazonaws.com/45374596/264603770-e7b1df47-866a-4420-8d22-5ca3f507783f.png',
    description: 'Parham project description 1',
    githubLink: 'https://theuselessweb.com/',
    demoLink: 'https://theuselessweb.com/',
  },
  {
    name: 'Parham project 2',
    img: 'https://github-production-user-asset-6210df.s3.amazonaws.com/45374596/264603770-e7b1df47-866a-4420-8d22-5ca3f507783f.png',
    description: 'Parham project description 2',
    githubLink: 'https://theuselessweb.com/',
    demoLink: 'https://theuselessweb.com/',
  },
  {
    name: 'Parham project 3',
    img: 'https://github-production-user-asset-6210df.s3.amazonaws.com/45374596/264603770-e7b1df47-866a-4420-8d22-5ca3f507783f.png',
    description: 'Parham project description 3',
    githubLink: 'https://theuselessweb.com/',
    demoLink: 'https://theuselessweb.com/',
  },
  {
    name: 'Parham project 4',
    img: 'https://github-production-user-asset-6210df.s3.amazonaws.com/45374596/264603770-e7b1df47-866a-4420-8d22-5ca3f507783f.png',
    description: 'Parham project description 4',
    githubLink: 'https://theuselessweb.com/',
    demoLink: 'https://theuselessweb.com/',
  },
  {
    name: 'Parham project 5',
    img: 'https://github-production-user-asset-6210df.s3.amazonaws.com/45374596/264603770-e7b1df47-866a-4420-8d22-5ca3f507783f.png',
    description: 'Parham project description 5',
    githubLink: 'https://theuselessweb.com/',
    demoLink: 'https://theuselessweb.com/',
  },
  {
    name: 'Parham project 6',
    img: 'https://github-production-user-asset-6210df.s3.amazonaws.com/45374596/264603770-e7b1df47-866a-4420-8d22-5ca3f507783f.png',
    description: 'Parham project description 6',
    githubLink: 'https://theuselessweb.com/',
    demoLink: 'https://theuselessweb.com/',
  },
];

export const edvinProjects: Project[] = [
  {
    name: 'Edvin project 1',
    img: 'https://github-production-user-asset-6210df.s3.amazonaws.com/45374596/264603828-dcaaf3b8-afe6-4c3c-b450-dae4cc51294a.png',
    description: 'Edvin project description 1',
    githubLink: 'https://theuselessweb.com/',
    demoLink: 'https://theuselessweb.com/',
  },
  {
    name: 'Edvin project 2',
    img: 'https://github-production-user-asset-6210df.s3.amazonaws.com/45374596/264603828-dcaaf3b8-afe6-4c3c-b450-dae4cc51294a.png',
    description: 'Edvin project description 2',
    githubLink: 'https://theuselessweb.com/',
    demoLink: 'https://theuselessweb.com/',
  },
  {
    name: 'Edvin project 3',
    img: 'https://github-production-user-asset-6210df.s3.amazonaws.com/45374596/264603828-dcaaf3b8-afe6-4c3c-b450-dae4cc51294a.png',
    description: 'Edvin project description 3',
    githubLink: 'https://theuselessweb.com/',
    demoLink: 'https://theuselessweb.com/',
  },
  {
    name: 'Edvin project 4',
    img: 'https://github-production-user-asset-6210df.s3.amazonaws.com/45374596/264603828-dcaaf3b8-afe6-4c3c-b450-dae4cc51294a.png',
    description: 'Edvin project description 4',
    githubLink: 'https://theuselessweb.com/',
    demoLink: 'https://theuselessweb.com/',
  },
  {
    name: 'Edvin project 5',
    img: 'https://github-production-user-asset-6210df.s3.amazonaws.com/45374596/264603828-dcaaf3b8-afe6-4c3c-b450-dae4cc51294a.png',
    description: 'Edvin project description 5',
    githubLink: 'https://theuselessweb.com/',
    demoLink: 'https://theuselessweb.com/',
  },
  {
    name: 'Edvin project 6',
    img: 'https://github-production-user-asset-6210df.s3.amazonaws.com/45374596/264603828-dcaaf3b8-afe6-4c3c-b450-dae4cc51294a.png',
    description: 'Edvin project description 6',
    githubLink: 'https://theuselessweb.com/',
    demoLink: 'https://theuselessweb.com/',
  },
];

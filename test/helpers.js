const randomString = (length) => {
  const x = 36 ** (length + 1);
  const y = 36 ** length;
  return Math.round(x - (Math.random() * y)).toString(36).slice(1);
};

const pages = [
  {
    route: '/',
    title: 'Abdulganiyu Yusufu',
    heading: 'ABOUT THIS SITE',
  },
  {
    route: '/about',
    title: 'About | Abdulganiyu Yusufu',
    heading: 'ABOUT ME',
  },
  {
    route: '/projects',
    title: 'Projects | Abdulganiyu Yusufu',
    heading: 'PROJECTS',
  },
  {
    route: '/stats',
    title: 'Stats | Abdulganiyu Yusufu',
    heading: 'STATS',
  },
  {
    route: '/contact',
    title: 'Contact | Abdulganiyu Yusufu',
    heading: 'CONTACT',
  },
];

export { pages, randomString };

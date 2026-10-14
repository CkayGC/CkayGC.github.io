import mapNavigationImage from '../Images/MapNavigationProject.png';
import collisionAvoidanceProjectImage from '../Images/CollisionAvoidanceProject.png';
import watchListProject from '../Images/WatchListProject.png';

// Update this file to personalize your profile, experience, and project showcase.
export const profile = {
  name: 'Celvin Knudsen',
  firstName: 'Celvin',
  initials: 'CK',
  role: 'Full stack developer',
  email: 'Celvin.p.knudsen@gmail.com',
  github: 'https://github.com/',
  about: 'I’m a software developer with nearly a decade of hands-on programming and a product mindset. I’ve moved between building digital products and working closely with an agile team, always looking for practical ways to turn ambitious ideas into useful software. I enjoy the full journey—from shaping an idea and its interface to developing and improving the product.',
  personalAbout: 'I’m a curious, driven person who enjoys learning and figuring things out. I value open communication, enjoy being part of a team, and appreciate honest feedback because it helps people grow. I stay calm when things get busy, take initiative when something needs doing, and try to bring a positive, dependable energy to the people around me.',
  skills: ['C#', 'C++', 'Python', 'Lua', 'SQL', 'HTML', 'CSS', 'JavaScript', 'TypeScript', 'Git', 'GitHub', 'Figma', 'Trello', 'MySQL', 'Blender'],
};

export const experience = [
  {
    role: 'Founder & Product Developer',
    company: 'OXStudio',
    period: '2023 — 2026',
    description: 'Founded a digital product studio and took ideas from early concepts through design, development, and launch. The studio’s products grew to more than 500,000 user sessions and over SEK 6 million in in-app transactions.',
  },
  {
    role: 'Full Stack Developer',
    company: 'StudyBee',
    period: '2023 · Malmö, Sweden',
    description: 'Joined an agile product team to help develop new features, improve the user experience, and keep the product moving forward through close collaboration.',
  },
];

export const projects = [
  {
    title: 'Collision Avoidance Simulation',
    image: collisionAvoidanceProjectImage,
    imagePosition: 'center top',
    category: 'Simulation',
    description: 'An interactive simulation of agents navigating between nodes, with predicted paths and configurable avoidance behavior.',
    stack: ['React', 'TypeScript', 'Canvas', 'Simulation'],
    liveUrl: 'https://ckaygc.github.io/CollisionAvoidanceProject/',
    githubUrl: 'https://github.com/CkayGC/CollisionAvoidanceProject',
    art: 'violet', artTitle: 'COLLISION AVOIDANCE', artGlyph: '+',
  },
  {
    title: 'Map Navigation',
    image: mapNavigationImage,
    category: 'Mapping',
    description: 'A map that visualizes journeys between cities in central Sweden using real road data and animated route markers.',
    stack: ['JavaScript', 'MapLibre GL JS', 'Turf.js', 'GeoJSON'],
    liveUrl: 'https://ckaygc.github.io/MapNavigationProject/',
    githubUrl: 'https://github.com/CkayGC/MapNavigationProject',
    art: 'lime', artTitle: 'MAP NAVIGATION', artGlyph: '*',
  },
  {
    title: 'WatchlistTogether',
    image: watchListProject,
    imagePosition: 'center top',
    category: 'Web application',
    description: 'Worked on the SQLite backend for a watchlist app that uses a movie API to add shows and movies, track statuses such as Watching, Completed, and Dropped, and record episode progress for shows.',
    stack: ['SQLite', 'Backend', 'Movie API'],
    liveUrl: '',
    githubUrl: 'https://github.com/Official404/WatchlistTogether',
    art: 'orange', artTitle: 'WATCHLIST TOGETHER', artGlyph: '+',
  },
];

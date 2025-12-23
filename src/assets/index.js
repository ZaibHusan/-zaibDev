import zaibprofile from './zaibprofile.png';
import instagram from './instagram.png';
import tiktok from './tiktok.png';
import linkedin from './linkedin.png';
import email from './email.png';
import iphone from './iphone.png';
import Hero from './Hero.jpg';
import html from './html.png';
import css from './css-3.png';
import javascript from './java-script.png';
import react from './science.png';
import Nodejs from './Nodejs.png';
import Expressjs from './express-js.png';
import Authentication from './authentication.png';
import MongoDB from './mongo-db.png';
import frontEnd from './front-end.png';
import background from './Background image.jpg';
import sidebar from './sidebar.png';
import close from './closenav.png';
const assets = {
  close,
  sidebar,
  background,
  frontEnd,
  html,
  Hero,
  zaibprofile,
  instagram,
  tiktok,
  linkedin,
  email,
  iphone
}

export default assets


export const frontendSkills = [
  { name: "HTML5", percent: 95, image: html },
  { name: "CSS3", percent: 90, image: css },
  { name: "JavaScript (ES6+)", percent: 85, image: javascript },
  { name: "React.js", percent: 90, image: react },
];

export const backendSkills = [
  { name: "Node.js", percent: 90, image: Nodejs },
  { name: "Express.js", percent: 80, image: Expressjs },
  { name: "Auth & Authorization", percent: 70, image: Authentication },
  { name: "MongoDB", percent: 95, image: MongoDB },
];



export const services = [
  {
    id: 1,
    title: "Business Website Development",
    description:
      "I create modern, fast, and mobile-friendly websites that help businesses build trust and grow online.",
    image: assets.frontEnd,
  },
  {
    id: 2,
    title: "Full Stack Web Applications",
    description:
      "I develop complete web applications with frontend, backend, database, and authentication tailored to your needs.",
    image: assets.fullStack,
  },
  {
    id: 3,
    title: "Custom Backend & APIs",
    description:
      "I build secure and scalable backend systems and APIs to power your web or mobile applications.",
    image: assets.backend,
  },
  {
    id: 4,
    title: "UI/UX & Frontend Design",
    description:
      "I design clean, user-friendly interfaces that improve user experience and keep visitors engaged.",
    image: assets.uiux,
  },
  {
    id: 5,
    title: "Website Fixes & Optimization",
    description:
      "I fix bugs, improve website speed, enhance SEO, and upgrade existing websites for better performance.",
    image: assets.optimization,
  },
  {
    id: 6,
    title: "Deployment & Maintenance",
    description:
      "I deploy your website to live servers and provide ongoing updates, security, and technical support.",
    image: assets.deployment,
  },
];




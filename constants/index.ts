import { ThingsIDo } from "@/types";
import { baseUrlTech } from "@/constants/techData";

export const profile = {
  summary: ` Frontend Developer with expertise in React, TypeScript, and modern web technologies. 
              Experienced in building high-performance UI components and optimizing user experiences. 
              Passionate about creating scalable applications and contributing to innovative projects 
              across diverse industries including blockchain and SaaS platforms.`,
  gitHub: "https://github.com/mitalrs",
  name: "Mital Sapkale",
  title: "Frontend Developer",
  gitHubUserName: "mitalrs",
  xUserName: "mitalrs",
  linkedin: 'https://www.linkedin.com/in/mital-sapkale',
  x: 'https://x.com/mitalrs',
  instagram: "https://www.instagram.com/mitalrs"
};
export const hostedUrl = "https://mital-sapkale-portfolio.vercel.app";
export const canonicalUrl = "https://mital-sapkale-portfolio.vercel.app";

export const TYPEWRITER_WORDS = [
  { text: "I" },
  { text: "Create" },
  { text: "High-Performance" },
  { text: "User" },
  { text: "Interfaces" },
  { text: "With" },
  { text: "Modern" },
  { text: "Technologies" },
  { text: "!" }
];


export const socialMediaLinks = [
  {
    title: 'LinkedIn',
    icon: '/assets/social/linkedin.svg',
    href: 'https://www.linkedin.com/in/mital-sapkale',
    smLabel: 'LN',
  },
  {
    title: 'GitHub',
    icon: '/assets/social/github.svg',
    href: 'https://github.com/mitalrs',
    smLabel: 'GH',
  },
  {
    title: 'Email',
    icon: '/assets/social/email.svg',
    href: 'mailto:mitalsapkale1999@gmail.com',
    smLabel: 'EM',
  },
  {
    title: 'Phone',
    icon: '/assets/social/phone.svg',
    href: 'tel:+917776850205',
    smLabel: 'PH',
  },
  {
    title: 'Twitter',
    icon: '/assets/social/x.png',
    href: 'https://x.com/mitalrs',
    smLabel: 'TW',
  }
];


export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/open-source", label: "Open Source" },
  { href: "/experience", label: "Experience" },
  { href: "/stack", label: "Stack" },
  { href: "/contact", label: "Contact Me" },
];

export const openSourceOrganizations = [
  { name: "Strapi", url: "https://strapi.io", logo: "/assets/org/strapi.png" },
  { name: "Impler", url: "https://impler.io", logo: "/assets/org/impler.png" },
  { name: "Origin Ui", url: "https://originui.com", logo: "/assets/org/origin.ico" },
  { name: "OpenCut", url: "https://opencut.app", logo: "/assets/org/opencut.png" },
  { name: "Gemini CLI", url: "https://github.com/google-gemini/gemini-cli", logo: "/assets/org/gemini.png" }
];


export const thingsIDo: ThingsIDo[] = [
  {
    name: "Frontend Development",
    image: "/assets/images/frontend-dev.svg",
    tech: [
      { name: "React JS", url: `${baseUrlTech}/react.svg` },
      { name: "Next JS", url: `${baseUrlTech}/nextjs.svg` },
      { name: "TypeScript", url: `${baseUrlTech}/typescript.svg` },
      { name: "JavaScript", url: `${baseUrlTech}/javascript.svg` },
      { name: "Tailwind", url: `${baseUrlTech}/tailwind.svg` },
      { name: "Redux", url: `${baseUrlTech}/redux.svg` },
      { name: "MaterialUI", url: `${baseUrlTech}/mui.png` },
      { name: "Framer Motion", url: `${baseUrlTech}/framer-motion.svg` },
      { name: "Radix UI", url: `${baseUrlTech}/radix-ui.svg` },
    ],
    capabilities: [
      { text: 'Building high-performance UI components with React, Next.js, and TypeScript', icon: '💻' },
      { text: 'Optimizing frontend performance by 30% and reducing API latency by 20%', icon: '⚡' },
      { text: 'Creating responsive, cross-platform interfaces with modern CSS frameworks', icon: '📱' }
    ]
  },
  {
    name: "Backend Integration & APIs",
    image: "/assets/images/backend-api.svg",
    tech: [
      { name: "Node JS", url: `${baseUrlTech}/nodejs.svg` },
      { name: "MongoDB", url: `${baseUrlTech}/mongodb.svg` },
      { name: "Axios", url: `${baseUrlTech}/axios.svg` },
      { name: "React Query", url: `${baseUrlTech}/react-query.svg` },
      { name: "Express", url: `${baseUrlTech}/express.svg` },
      { name: "JWT", url: `${baseUrlTech}/jwt.svg` },
      { name: "Firebase", url: `${baseUrlTech}/firebase.svg` },
      { name: "Postman", url: `${baseUrlTech}/postman.svg` },
    ],
    capabilities: [
      { text: 'Integrating RESTful APIs with React and optimizing data flow', icon: '🔗' },
      { text: 'Implementing secure authentication and state management solutions', icon: '🔐' },
      { text: 'Reducing API response handling time by 25% and improving data reliability', icon: '💾' },
    ]
  },
  {
    name: "Development Tools & Blockchain",
    image: "/assets/images/dev-tools.svg",
    tech: [
      { name: "GitHub", url: `${baseUrlTech}/github.svg` },
      { name: "Jest", url: `${baseUrlTech}/jest.png` },
      { name: "Figma", url: `${baseUrlTech}/figma-icon.svg` },
      { name: "TypeScript", url: `${baseUrlTech}/typescript.svg` },
      { name: "TanStack Query", url: `${baseUrlTech}/react-query.svg` },
      { name: "Postman", url: `${baseUrlTech}/postman.svg` },
      { name: "VSCode", url: `${baseUrlTech}/vscode.svg` },
      { name: "ESLint", url: `${baseUrlTech}/eslint.svg` },
    ],
    capabilities: [
      { text: 'Version control and collaborative development with Git and GitHub', icon: '🔄' },
      { text: 'Building blockchain applications and NFT collections with Solidity and Web3', icon: '⛓️' },
      { text: 'Testing applications and maintaining code quality with Jest and code reviews', icon: '✅' },
    ]
  }
];
// Audio file path
export const AUDIO_SRC = "/assets/keyboardpress.mp3";

// Timing constants
export const KEY_PRESS_DURATION = 150;


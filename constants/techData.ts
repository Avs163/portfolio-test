import { Tech } from "@/types";

const badgeBase = "https://img.shields.io/badge";

export const skills: Tech[] = [
    // Languages
    { name: "JavaScript", url: `${badgeBase}/JavaScript-%23323330.svg?style=flat&logo=javascript&logoColor=%23F7DF1E` },
    { name: "TypeScript", url: `${badgeBase}/TypeScript-%23007ACC.svg?style=flat&logo=typescript&logoColor=white` },
    { name: "Python", url: `${badgeBase}/Python-3776AB?style=flat&logo=python&logoColor=white` },
    { name: "Solidity", url: `${badgeBase}/Solidity-%23363636.svg?style=flat&logo=solidity&logoColor=white` },
    
    // Frameworks
    { name: "React", url: `${badgeBase}/React-%2320232a.svg?style=flat&logo=react&logoColor=%2361DAFB` },
    { name: "Next.js", url: `${badgeBase}/Next.js-black?style=flat&logo=next.js&logoColor=white` },
    { name: "Tailwind CSS", url: `${badgeBase}/Tailwind%20CSS-%2338B2AC.svg?style=flat&logo=tailwind-css&logoColor=white` },
    { name: "Material UI", url: `${badgeBase}/Material%20UI-%23007FFF.svg?style=flat&logo=mui&logoColor=white` },
    { name: "Mantine", url: `${badgeBase}/Mantine-%23339AF0.svg?style=flat&logo=mantine&logoColor=white` },
    { name: "Remix", url: `${badgeBase}/Remix-%23000000.svg?style=flat&logo=remix&logoColor=white` },
    { name: "Vue.js", url: `${badgeBase}/Vue.js-%2335495e.svg?style=flat&logo=vuedotjs&logoColor=%234FC08D` },
    { name: "Node.js", url: `${badgeBase}/Node.js-6DA55F?style=flat&logo=node.js&logoColor=white` },
    { name: "Frappe", url: `${badgeBase}/Frappe-%23008000.svg?style=flat&logo=frappe&logoColor=white` },
    
    // Tools
    { name: "Redux", url: `${badgeBase}/Redux-%23593d88.svg?style=flat&logo=redux&logoColor=white` },
    { name: "RTK", url: `${badgeBase}/RTK-%23764ABC.svg?style=flat&logo=redux&logoColor=white` },
    { name: "Git", url: `${badgeBase}/Git-F05032?style=flat&logo=git&logoColor=white` },
    { name: "Strapi", url: `${badgeBase}/Strapi-2E7EEA?style=flat&logo=strapi&logoColor=white` },
    { name: "Jest", url: `${badgeBase}/Jest-%23C21325.svg?style=flat&logo=jest&logoColor=white` },
    { name: "TanStack Query", url: `${badgeBase}/TanStack%20Query-FF4154?style=flat&logo=react%20query&logoColor=white` },
    { name: "HeadlessUI", url: `${badgeBase}/HeadlessUI-%2366E0FF.svg?style=flat&logo=headlessui&logoColor=black` },
    { name: "Axios", url: `${badgeBase}/Axios-5A29E3?style=flat&logo=axios&logoColor=white` },
    { name: "Form.IO", url: `${badgeBase}/Form.IO-%2300A0E4.svg?style=flat&logo=form.io&logoColor=white` },
    { name: "MongoDB", url: `${badgeBase}/MongoDB-%234ea94b.svg?style=flat&logo=mongodb&logoColor=white` },
    
    // Platforms
    { name: "GitHub", url: `${badgeBase}/GitHub-181717?style=flat&logo=github&logoColor=white` },
    { name: "Postman", url: `${badgeBase}/Postman-FF6C37?style=flat&logo=postman&logoColor=white` },
    { name: "Linux", url: `${badgeBase}/Linux-FCC624?style=flat&logo=linux&logoColor=black` },
    { name: "Figma", url: `${badgeBase}/Figma-%23F24E1E.svg?style=flat&logo=figma&logoColor=white` },
    { name: "Jira", url: `${badgeBase}/Jira-%230052CC.svg?style=flat&logo=jira&logoColor=white` },
    { name: "AWS", url: `${badgeBase}/AWS-%23FF9900.svg?style=flat&logo=amazon-aws&logoColor=white` },
];

export const baseUrlTech = "/assets/tech";
export const technologies: Tech[] = [
    // Languages
    { name: "TypeScript", url: `${baseUrlTech}/typescript.svg` },
    { name: "JavaScript", url: `${baseUrlTech}/javascript.svg` },
    { name: "Python", url: `${baseUrlTech}/python.svg` },
    { name: "Solidity", url: `${baseUrlTech}/solidity.svg` },

    // Frameworks
    { name: "ReactJS", url: `${baseUrlTech}/react.svg` },
    { name: "Next JS", url: `${baseUrlTech}/nextjs.svg` },
    { name: "TailwindCSS", url: `${baseUrlTech}/tailwind.svg` },
    { name: "Material UI", url: `${baseUrlTech}/mui.png` },
    { name: "Mantine", url: `${baseUrlTech}/mantine.svg` },
    { name: "Remix", url: `${baseUrlTech}/remix.svg` },
    { name: "Vue.js", url: `${baseUrlTech}/vuejs.svg` },
    { name: "NodeJS", url: `${baseUrlTech}/nodejs.svg` },
    { name: "Frappe", url: `${baseUrlTech}/frappe.svg` },

    // Tools
    { name: "Redux", url: `${baseUrlTech}/redux.svg` },
    { name: "RTK", url: `${baseUrlTech}/redux.svg` },
    { name: "Git", url: `${baseUrlTech}/git.svg` },
    { name: "Strapi", url: `/assets/org/strapi.png` },
    { name: "Jest", url: `${baseUrlTech}/jest.png` },
    { name: "TanStack Query", url: `${baseUrlTech}/react-query.svg` },
    { name: "HeadlessUI", url: `${baseUrlTech}/headlessui.svg` },
    { name: "Axios", url: `${baseUrlTech}/axios.svg` },
    { name: "Form.IO", url: `${baseUrlTech}/formio.svg` },
    { name: "MongoDB", url: `${baseUrlTech}/mongodb.svg` },

    // Platforms
    { name: "GitHub", url: `${baseUrlTech}/github.svg` },
    { name: "Postman", url: `${baseUrlTech}/postman.svg` },
    { name: "Linux", url: `${baseUrlTech}/linux.svg` },
    { name: "Figma", url: `${baseUrlTech}/figma-icon.svg` },
    { name: "Jira", url: `${baseUrlTech}/jira.svg` },
    { name: "AWS", url: `${baseUrlTech}/aws.svg` },
];
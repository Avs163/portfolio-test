import { Project } from "@/types";

/**
 * Add these indexes to your project according to technologies you used.
 */
//eslint-disable-next-line
const INDEXES = {
    // Languages
    "TypeScript": 0,
    "JavaScript": 1,
    "Python": 2,
    "Solidity": 3,
    
    // Frameworks
    "ReactJS": 4,
    "Next JS": 5,
    "TailwindCSS": 6,
    "Material UI": 7,
    "Mantine": 8,
    "Remix": 9,
    "Vue.js": 10,
    "NodeJS": 11,
    "Frappe": 12,
    
    // Tools
    "Redux": 13,
    "RTK": 14,
    "Git": 15,
    "Strapi": 16,
    "Jest": 17,
    "TanStack Query": 18,
    "HeadlessUI": 19,
    "Axios": 20,
    "Form.IO": 21,
    "MongoDB": 22,
    
    // Platforms
    "GitHub": 23,
    "Postman": 24,
    "Linux": 25,
    "Figma": 26,
    "Jira": 27,
    "AWS": 28,
};

export const projects: Project[] = [
    {
        title: "EthericNFT - Ethereum NFT Collection",
        description: "A complete NFT collection built with Solidity, React, and Web3 technologies featuring minting and marketplace integration.",
        detailedDescription: "EthericNFT is a comprehensive NFT collection utilizing Solidity smart contracts, ReactJS frontend, and Web3 technologies. The project includes smart contracts for minting and selling NFTs, Metamask wallet integration, and real-time transaction tracking using Alchemy and EtherScan. Successfully listed on OpenSea marketplace with 50 unique NFTs available for purchase.",
        technologies: [
            0,  // TypeScript
            4,  // ReactJS
            1,  // JavaScript  
            5,  // Next JS
            3,  // Solidity
        ],
        link: "https://opensea.io/collection/ethericnft",
        githubLink: "https://github.com/mitalrs/NFT-Collection",
        thumbnail: "/assets/projects/etheric-nft.png",
        showGitStats: true,
        achievements: [
            "⛓️ Built smart contracts for minting and selling NFTs using Solidity on Ethereum blockchain",
            "🌐 Integrated Metamask for secure wallet functionality and seamless user authentication",
            "📊 Implemented real-time status checks using Alchemy & EtherScan for transaction verification",
            "🛒 Successfully listed the NFT collection on OpenSea marketplace with proper metadata",
            "🎨 Created 50 unique NFTs with proper rarity distribution and artistic value",
            "🔍 Leveraged Alchemy and EtherScan to track and verify all blockchain transactions",
            "💻 Developed responsive React frontend with Web3 integration for user interaction",
            "🔐 Implemented secure smart contract architecture with proper access controls",
            "📈 Achieved successful marketplace listing with active trading capabilities",
            "🚀 Deployed smart contracts on Ethereum mainnet with gas optimization"
        ]
    },
    {
        title: "ExtraDex - Expense Management System",
        description: "A full-stack MERN application for tracking and managing personal expenses with secure authentication.",
        detailedDescription: "ExtraDex is a comprehensive expense tracker built with the MERN stack featuring a responsive UI using React and Material UI. The application includes secure REST API endpoints, JWT authentication for user sessions, and focuses on performance optimization and cross-device compatibility with clean component architecture.",
        technologies: [
            4,  // ReactJS
            11, // NodeJS
            1,  // JavaScript
            0,  // TypeScript
            7,  // Material UI
            22, // MongoDB
        ],
        link: "https://extradex-expense-tracker.vercel.app",
        githubLink: "https://github.com/mitalrs/learn-new",
        thumbnail: "/assets/projects/extradex.png",
        showGitStats: true,
        achievements: [
            "💰 Developed comprehensive expense tracking with category-wise classification and analytics",
            "🎨 Created visually appealing and responsive UI using Material UI components",
            "🔐 Integrated secure REST API endpoints with JWT authentication for login sessions",
            "📊 Implemented data visualization for expense patterns and financial insights",
            "📱 Ensured cross-device compatibility with responsive design principles",
            "⚡ Focused on performance optimization for smooth user experience",
            "🛠️ Built clean component architecture for maintainable and scalable code",
            "💾 Designed efficient data handling and storage with MongoDB",
            "🔒 Implemented secure data handling practices for financial information",
            "🚀 Deployed full-stack application with proper CI/CD pipeline"
        ]
    }
];

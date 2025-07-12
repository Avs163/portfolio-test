import type { TimelineEntry } from "@/types";

export const timelineData: TimelineEntry[] = [
    {
        id: "procodebaseai",
        title: "Frontend Developer",
        company: "ProCodebaseAI",
        type: "fulltime",
        duration: {
            start: "Dec 2024",
            end: "Present",
        },
        description:
            "Developed high-performance UI components in React.js and TypeScript for Varisht (SaaS), achieving seamless cross-platform responsiveness and optimized loading time. Integrated RESTful APIs using Axios and React Query, streamlining state and data flow with Context API for enhanced maintainability. Improved frontend performance by 30% and reduced API latency by 20%, directly contributing to user satisfaction and engagement.",
    },
    {
        id: "yatricabs",
        title: "Frontend Developer",
        company: "yatricabs",
        type: "fulltime",
        duration: {
            start: "Oct 2023",
            end: "Nov 2024",
        },
        description:
            "Built and optimized reusable UI components including data tables and forms using TypeScript, RTK, and Next.js, improving development speed by 30% across modules. Integrated dynamic API calls with Axios and RTK Query, reducing API response handling time by 25% and improving data reliability for cab drivers and client records. Collaborated on a scalable dashboard to manage cab drivers and clients, enhancing data accessibility and user workflows, resulting in 20% faster internal operations for the admin team.",
    },
    {
        id: "hybrowlabs",
        title: "Frontend Engineer",
        company: "Hybrowlabs Technologies",
        type: "fulltime",
        duration: {
            start: "Aug 2023",
            end: "Sep 2024",
        },
        description:
            "Led development of interactive React.js features for ChatNext, improving performance and user experience across browsers and devices. Integrated Frappe REST APIs with secure data handling, and collaborated with designers and frontend teams to implement features in Remix and React Native. Refactored codebase into reusable components using TypeScript and Redux, cutting development time by 15%. Actively contributed to PR/code reviews, managed tasks via Jira, and maintained quality via Git version control.",
    },
    {
        id: "hybrowlabs-intern",
        title: "Frontend Intern",
        company: "Hybrowlabs Technologies",
        type: "internship",
        duration: {
            start: "Jun 2023",
            end: "Jul 2023",
        },
        description:
            "Redesigned a WhatsApp Web-style chat UI in React with Tailwind CSS, improving first paint times and load speed for over 1,000 daily active users. Integrated real-time messaging using REST APIs and handled state management with React's useContext and Reducer. Collaborated cross-functionally with designers and engineers to release features faster, improving delivery speed by 15%.",
    }
];

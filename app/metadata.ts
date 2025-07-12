import { canonicalUrl, hostedUrl, profile } from "@/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        default: `Mital Sapkale - Frontend Developer `,
        template: "%s | Mital Sapkale - Frontend Developer",
    },
    description: "Frontend Developer specializing in React, TypeScript, and modern web technologies. Building high-performance UI components and optimizing user experiences. Open for collaboration.",
    keywords: [
        "Mital Sapkale",
        "Mital Sapkale Developer",
        "Mital Sapkale Portfolio",
        "mitalrs Portfolio",
        "Mital sapkale projects",
        "Mital sapkale tech stack",
        "Frontend Developer Portfolio",
        "React Developer Portfolio",
        "TypeScript Developer Portfolio",
        "Next.js Developer Portfolio",
        "UI/UX Developer Portfolio",
        "India Frontend Developer",
        "Maharashtra Frontend Developer",
        "Jalgaon Software Engineer",
        "Portfolio Web Developer India",
        "Mital Sapkale React",
        "Software Engineer Portfolio India",
        "Frontend Developer in Maharashtra",
        "Mital Sapkale Professional Portfolio",
        "Top Frontend Developer India",
        "Blockchain Developer Portfolio",
        "NFT Developer Portfolio"
    ],
    authors: [
        {
            name: "Mital Sapkale",
            url: "https://github.com/mitalrs",
        }
    ],
    creator: "Mital Sapkale (mitalrs)",
    publisher: "mitalrs",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    applicationName: "mitalrs Portfolio",
    generator: "Next.js",
    referrer: "origin-when-cross-origin",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: hostedUrl,
        siteName: "mitalrs Portfolio",
        title: `${profile.name} | ${profile.title}`,
        description: "Frontend Developer specializing in React, TypeScript, and modern web technologies. Building high-performance UI components and optimizing user experiences.",
        images: [
            {
                url: "/screenshots/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Mital Sapkale - Frontend Developer Portfolio",
                type: "image/png",
            }
        ],
        countryName: "India",
    },
    appleWebApp: {
        capable: true,
        title: "Mital Sapkale Portfolio",
        statusBarStyle: "black-translucent",
    },
    verification: {
        google: "google332e521595495b52",
    },
    twitter: {
        card: "summary_large_image",
        title: `${profile.name} | ${profile.title}`,
        description: "Frontend Developer specializing in React, TypeScript, and modern web technologies. Building high-performance UI components and optimizing user experiences.",
        images: ["/screenshots/twitter-image.png"],
        creator: `@${profile.xUserName}`,
        site: `@${profile.xUserName}`,
    },
    robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    icons: {
        icon: [
            { url: "/icons/favicon.ico" },
            { url: "/icons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
            { url: "/icons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
            { url: "/icons/favicon-96x96.png", sizes: "96x96", type: "image/png" },
        ],
        apple: [
            { url: "/icons/apple-icon-57x57.png", sizes: "57x57", type: "image/png" },
            { url: "/icons/apple-icon-60x60.png", sizes: "60x60", type: "image/png" },
            { url: "/icons/apple-icon-72x72.png", sizes: "72x72", type: "image/png" },
            { url: "/icons/apple-icon-76x76.png", sizes: "76x76", type: "image/png" },
            { url: "/icons/apple-icon-114x114.png", sizes: "114x114", type: "image/png" },
            { url: "/icons/apple-icon-120x120.png", sizes: "120x120", type: "image/png" },
            { url: "/icons/apple-icon-144x144.png", sizes: "144x144", type: "image/png" },
            { url: "/icons/apple-icon-152x152.png", sizes: "152x152", type: "image/png" },
            { url: "/icons/apple-icon-180x180.png", sizes: "180x180", type: "image/png" },
        ],
        shortcut: ["/icons/favicon.ico"]
    },
    manifest: "/manifest.json",
    alternates: {
        canonical: canonicalUrl,
        languages: {
            "en-US": canonicalUrl,
        },
    },
    category: "technology",
    classification: "Portfolio Website",
    metadataBase: new URL(hostedUrl),
    assets: '/assets',
    other: {
        "google-site-verification": "google332e521595495b52",
        "msapplication-TileColor": "#d830dc",
        "msapplication-TileImage": "/icons/ms-icon-144x144.png",
        "msapplication-config": "/browserconfig.xml",
        "llms-txt": `${hostedUrl}/llms.txt`
    },
};

export default metadata;
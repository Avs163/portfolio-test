import PdfViewer from '@/components/ui/pdfViewer';
import { canonicalUrl } from '@/constants';
import { Metadata } from 'next';
import { memo } from 'react';

export const metadata:Metadata = {
  title: "Resume",
  description: "View my professional resume detailing my experience as a Frontend Developer, technical skills, projects, and achievements in web development.",
  openGraph: {
    title: "Resume | Mital Sapkale",
    description: "Professional resume of Mital Sapkale - Frontend Developer specializing in React and modern web technologies",
    images: [
      {
        url: "/screenshots/resume-og.png",
        width: 1200,
        height: 630,
        alt: "Mital Sapkale's Resume",
        type: "image/png",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Resume | Mital Sapkale",
    description: "Professional resume of Mital Sapkale - Frontend Developer specializing in React and modern web technologies",
    images: ["/screenshots/resume-og.png"],
  },
  alternates: {
    canonical: `${canonicalUrl}/resume`,
  },
};

const page = () => {
  return (
    <PdfViewer />
  );
};

export default memo(page);
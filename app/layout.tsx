import { personSchema, siteNavigationSchema, websiteSchema } from "@/app/schema";
import HighlightBackground from "@/components/HighlightBackground";
import ThemeProvider from "@/components/layout/ThemeProvider";
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "@/components/ui/toaster";
import { firaCode, sourceCodePro } from "./fonts";
import Footer from "@/components/layout/Footer";
import NavBar from "@/components/layout/NavBar";
import type { RootLayoutProps } from "@/types";
import { cn } from "@/lib/utils";
import metadata from "./metadata";
import "@/style/globals.css";
import AccessibilityWidget from "@/components/AccessibilityWidget";
import SchemaScripts from "@/components/SchemaScripts";

const layout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={cn(
          "antialiased relative remove-scrollbar",
          firaCode.className,
          sourceCodePro.className,
        )}
        suppressHydrationWarning={true}
      >
        <SchemaScripts schemas={[personSchema, websiteSchema, siteNavigationSchema]} />
        <HighlightBackground>
          <AccessibilityWidget />
          <NavBar />
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
          >
            {children}
          </ThemeProvider>
        </HighlightBackground>
        <Footer />
        <Toaster />
        <Analytics debug={false} />
      </body>
    </html>
  );
};
export { metadata };

export default layout;
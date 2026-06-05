import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Milton Diaz (Li Yi Dun) | Full-Stack Web Developer",
  description:
    "Full-stack developer building SaaS platforms, CMS systems, and business software with React, Node.js, Express, MySQL, and Tailwind CSS.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Milton Diaz",
              alternateName: "Li Yi Dun",
              url: "https://diyidun.github.io/",
              image: "https://diyidun.github.io/me.jpeg",
              jobTitle: "Full-Stack Web Developer",
              knowsAbout: [
                "React",
                "Tailwind CSS",
                "JavaScript",
                "TypeScript",
                "Next.js",
                "Node.js",
                "Express.js",
                "MySQL",
                "REST APIs",
                "SaaS Development",
                "Multi-tenant Architecture",
                "Role-based Access Control",
                "PayPal Integration",
                "Internationalization",
                "SEO",
                "Linux Server Deployment",
              ],
              sameAs: [
                "https://github.com/diyidun",
                "https://www.linkedin.com/in/milton-diaz-li-yi-dun-583597142",
              ],
            }),
          }}
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

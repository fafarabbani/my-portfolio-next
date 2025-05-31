import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });
const baseUrlMeta = `${new URL("https://fafarabbani.my.id/")}`;
export const metadata = {
  metadataBase: new URL("https://fafarabbani.my.id/"),
  title: "Fafa Rabbani | Portfolio",
  description:
    "Fafa Rabbani is a web developer with 2 years of experience.",
  author: "Fafa Rabbani",
  subject: "Web Development",
  copyright: "© Fafa Rabbani",
  keywords: [
    "Fafa Rabbani",
    "Next.js",
    "React",
    "JavaScript",
    "Laravel",
    "Codeigniter",
    "PHP",
    "HTML",
    "Web developer",
    "coding services",
    "website development services",
    "IT assignment services",
    "Information Systems",
    "Jasa buat website",
    "joki tugas IT",
    "Joki buat website",
    "Joki Coding",
    "Joki coding jogja",
    "joki murah",
  ],
  generator: "Next.js",
  applicationName: "Fafa Rabbani | Portfolio",
  referrer: "origin-when-cross-origin",
  colorScheme: "dark",
  creator: "Fafa Rabbani",
  publisher: "Fafa Rabbani",
  language: "id",
  geo: {
    country: "ID",
    placename: "Batam",
  },
  openGraph: {
    images: [
      {
        url: `${baseUrlMeta}images/profile_2.jpg`,
        alt: "Fafa Rabbani",
      },
      {
        url: `${baseUrlMeta}images/project/cekresi/1.png`,
        alt: "Portofolio Cek Resi CGN",
      },
      {
        url: `${baseUrlMeta}images/project/ikanme/1.png`,
        alt: "Portofolio Ikan Me",
      },
    ],
    description:
      "Fafa Rabbani is a web developer with 3 years of experience.",
    author: "Fafa Rabbani",
  },
  basic: {
    title: "Fafa Rabbani - Fullstack Engineer",
    type: "website",
    image: {
      url: `${baseUrlMeta}images/profile_2.jpg`,
      alt: "Fafa Rabbani",
    },
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-10 md:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="bg-[#e1c1a8] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#a8c6e1] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />

            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

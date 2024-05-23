import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
import NextTopLoader from 'nextjs-toploader';
export const metadata: Metadata = {
  title: "CodeWithSundeep.com | Expert Web & Software Development Insights by Sundeep Sharma",
  description: "Welcome to CodeWithSundeep.com, the personal blog of Sundeep Sharma, an experienced web and software developer. Dive into a wealth of knowledge where I share expert insights, practical tutorials, and the latest trends in web and software development. Whether you're a beginner looking to start your coding journey or a seasoned developer aiming to stay ahead, my blog offers valuable resources to help you succeed. Join a growing community of tech enthusiasts and elevate your skills with CodeWithSundeep.com",
  icons:{
    icon:'/icon.ico'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <NextTopLoader 
       showSpinner={true}/>
        {children}
        </body>
    </html>
  );
}

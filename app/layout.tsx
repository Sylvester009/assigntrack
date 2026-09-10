import type { Metadata } from "next";
import { Geist_Mono, DM_Sans } from "next/font/google";
import "./globals.css";
import SideBar from "./components/sidebar";
import Header from "./components/header";

const geistSans = DM_Sans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AssignTrack",
  description: "Assignment Submission & Tracking",
};


export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <>
          <div id="toast" className="toast"></div>
          <div id="app" className="app">
            <SideBar />
            <main className="main">
              <Header />
              <section id="content" className="content">{children} </section>
            </main>
          </div>

          <div id="modal" className="modal hidden">
            <div className="modal-backdrop"></div>
            <div className="modal-card">
              <button className="modal-close" id="modalClose">×</button>
              <div id="modalContent"></div>
            </div>
          </div>
        </></body>
    </html>
  );
}

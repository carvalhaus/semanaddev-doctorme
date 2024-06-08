import type { Metadata } from "next";
import { Roboto, Source_Sans_3 } from "next/font/google";
import PreloadResources from "./preloud-resources";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  style: "normal",
  weight: ["400", "700"],
  variable: "--font-roboto",
});

const sourceSans3 = Source_Sans_3({
  subsets: ["latin"],
  style: "normal",
  weight: ["400", "600", "700"],
  variable: "--font-source-sans-3",
});

export const metadata: Metadata = {
  title: "DoctorMe",
  description: "Assistente pessoal para agendar consultas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <PreloadResources />
      <body
        className={`${roboto.variable} ${sourceSans3.variable} bg-slate-200`}
      >
        <div className="w-ful m-auto mt-10 max-w-[382px] bg-white py-10 px-7 rounded-3xl shadow-md">
          {children}
        </div>
      </body>
    </html>
  );
}

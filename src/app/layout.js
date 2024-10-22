import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/FuturaPTLight.otf",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/FuturaPTLight.otf",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Sagar",
  description: "3d portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className=""
      >
        {children}
      </body>
    </html>
  );
}

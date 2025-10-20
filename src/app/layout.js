import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "../../components/navbar";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Nishtha S",
  description: "Portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased`}
      >
        <Navbar />
        <div>{children}</div>
      </body>
    </html>
  );
}

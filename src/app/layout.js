import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Sohail Mulla | Data Scientist & ML Engineer",
  description: "Data Scientist and ML Engineer specializing in Python, deep learning, and modern AI. OPT Eligible STEM.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
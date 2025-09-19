import "./globals.css";

export const metadata = {
  title: "The Social Hawks - Digital Marketing Agency",
  description: "Professional social media management, content creation, and digital marketing solutions that help your brand soar.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="antialiased"
        style={{ fontFamily: 'sans-serif', fontWeight: 400 }}
      >
        {children}
      </body>
    </html>
  );
}

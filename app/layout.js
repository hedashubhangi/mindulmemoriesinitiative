import "./globals.css";

export const metadata = {
  title: "Mindful Memories Initiative",
  description: "A compassionate site for dementia care through memory books, engagement kits, and community support.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>
      <body className="min-h-full bg-background text-on-background antialiased">{children}</body>
    </html>
  );
}

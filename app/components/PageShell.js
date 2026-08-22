import Footer from "./Footer";
import Header from "./Header";

export default function PageShell({ children }) {
  return (
    <div className="min-h-screen bg-surface text-on-surface">
      <Header />
      <main className="mx-auto w-full max-w-[1200px] px-gutter py-6 sm:py-8">{children}</main>
      <Footer />
    </div>
  );
}

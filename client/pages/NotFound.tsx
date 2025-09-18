import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-white to-secondary/10">
      <Header />
      <main>
        <div className="container flex min-h-[50vh] flex-col items-center justify-center text-center py-16">
          <h1 className="text-6xl font-extrabold">404</h1>
          <p className="mt-3 text-lg text-foreground/70">Oops! Page not found</p>
          <a href="/" className="mt-6 inline-flex rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
            Return to Home
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;

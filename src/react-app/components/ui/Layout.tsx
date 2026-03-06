import React, { ReactNode, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
  className?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, className = "" }) => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50">
        <Header />
      </header>

      {/* Main content */}
      <main className={`flex-1 ${className} pb-10`}>{children}</main>

      {/* Footer fixé */}
      <div className="fixed bottom-0 w-full z-50">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;

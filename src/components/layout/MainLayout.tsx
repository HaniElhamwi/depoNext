import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface MainLayoutProps {
  children: ReactNode;
  params;
}

const MainLayout = ({ children, params }: MainLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header params={params} />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;

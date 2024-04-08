import { Outlet } from "react-router-dom";
import Header from "~/layouts/Header";
import Footer from "./Footer";

const PageLayout = () => {
  return (
    <div>
      <header className="bg-onPrimaryContainer border-b shadow-md shadow-[rgba(100,100,100,0.16)] w-full">
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default PageLayout;

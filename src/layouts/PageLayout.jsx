import { Outlet } from "react-router-dom";
import Header from "~/layouts/Header";
import Footer from "./Footer";
import ConsentBanner from "~/components/ConsentsBanner";

const PageLayout = () => {
  return (
    <div>
      <header className="bg-onPrimaryContainer border-b shadow-md shadow-[rgba(100,100,100,0.16)] w-full h-full overflow-y-auto">
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
      <Footer />
      <ConsentBanner />
    </div>
  );
};

export default PageLayout;

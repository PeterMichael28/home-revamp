import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import PageLayout from "./layouts/PageLayout";
import HomePage from "./pages/HomePage";
import FormPage from "./pages/FormPage";
import CompletedPage from "./pages/CompletedPage";
import UseOfTerms from "./pages/UseOfTerms";
import PrivacyPage from "./pages/PrivacyPage";
import PartnersPage from "./pages/PartnersPage";
import CCPAPage from "./pages/CCPA";
import ContactPage from "./pages/ContactPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ThankyouPage from "./pages/ThankyouPage";
import { useEffect } from "react";
import ReactGA from "react-ga4";
import AdminLayout from "./layouts/AdminLayout";
import SolarDashbiard from "./pages/admin/SolarDashbiard";
import BathroomDashboard from "./pages/admin/BathroomDashboard";
import RoofingDashboard from "./pages/admin/RoofingDashboard";
import HavcsDashboard from "./pages/admin/HavcsDashboard";
import WindowsDashboard from "./pages/admin/WindowsDashboard";
import AffiliatePage from "./pages/AffiliatePage";
import AuthLoginPage from "./pages/admin/AuthLoginPage";
import ProtectedAdminRoutes from "./layouts/ProtectedRoutes";
import GutterDashboard from "./pages/admin/GutterDashboard";
import PlumbingDashboard from "./pages/admin/PlumbingDashboard";
import KitchenDashboard from "./pages/admin/KitchenDashboard";
import PaintingDashboard from "./pages/admin/PaintingDashboard";
import V2FormPage from "./pages/V2FormPage";

const measurementId = import.meta.env.VITE_GOOGLE_MEASUREMENT_ID;

ReactGA.initialize(measurementId);

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <PageLayout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "/:slug",
          element: <FormPage />,
        },
        {
          path: "/:slug/v2",
          element: <V2FormPage />,
        },
        {
          path: "/:slug/completed",
          element: <CompletedPage />,
        },
        {
          path: "/thank-you",
          element: <ThankyouPage />,
        },
        {
          path: "/privacy-policy",
          element: <PrivacyPage />,
        },
        {
          path: "/use-of-terms",
          element: <UseOfTerms />,
        },
        {
          path: "/ccpa",
          element: <CCPAPage />,
        },
        {
          path: "/contact",
          element: <ContactPage />,
        },
        {
          path: "/contact",
          element: <UseOfTerms />,
        },
        {
          path: "/our-partners",
          element: <PartnersPage />,
        },
        {
          path: "/join-our-affiliate-team",
          element: <AffiliatePage />,
        },
      ],
      errorElement: <h1>Error Page</h1>,
    },
    // {
    //   path: "/new",
    //   element: <BoberdooForm />,
    // },

    // admin login
    {
      path: "/admin/login",
      element: <AuthLoginPage />,
    },
    {
      element: <ProtectedAdminRoutes />,
      children: [
        {
          path: "/admin",
          element: <AdminLayout />,
          children: [
            {
              path: "/admin/solar",
              element: <SolarDashbiard />,
            },
            {
              path: "/admin/bathrooms",
              element: <BathroomDashboard />,
            },
            {
              path: "/admin/roofing",
              element: <RoofingDashboard />,
            },
            {
              path: "/admin/windows",
              element: <WindowsDashboard />,
            },
            {
              path: "/admin/havcs",
              element: <HavcsDashboard />,
            },
            {
              path: "/admin/kitchen",
              element: <KitchenDashboard />,
            },
            {
              path: "/admin/gutter",
              element: <GutterDashboard />,
            },
            {
              path: "/admin/plumbing",
              element: <PlumbingDashboard />,
            },
            {
              path: "/admin/painting",
              element: <PaintingDashboard />,
            },
          ],
        },
      ],
    },
  ]);

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }, []);

  return (
    <>
      <RouterProvider router={router} />

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
}

export default App;

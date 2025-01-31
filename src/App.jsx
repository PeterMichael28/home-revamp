// src/App.js
import React, { Suspense, useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import PageLayout from "./layouts/PageLayout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactGA from "react-ga4";
import AdminLayout from "./layouts/AdminLayout";
import ProtectedAdminRoutes from "./layouts/ProtectedRoutes";
import TrustedForm from "./scripts/trusted-form";
import FullPageLoader from "./components/Loading/FullpageLoader";
// import HomePage from "./pages/HomePage";

import PrivacyPage from "./pages/PrivacyPage";
import ThankyouPage from "./pages/ThankyouPage";
import UseOfTerms from "./pages/UseOfTerms";
import CCPAPage from "./pages/CCPA";
import ContactPage from "./pages/ContactPage";
const HomePage = React.lazy(() => import("./pages/HomePage"));
const FormPage = React.lazy(() => import("./pages/FormPage"));
const CompletedPage = React.lazy(() => import("./pages/CompletedPage"));
const PartnersPage = React.lazy(() => import("./pages/PartnersPage"));
const AuthLoginPage = React.lazy(() => import("./pages/admin/AuthLoginPage"));
const SolarDashbiard = React.lazy(() => import("./pages/admin/SolarDashbiard"));
const BathroomDashboard = React.lazy(() => import("./pages/admin/BathroomDashboard"));
const RoofingDashboard = React.lazy(() => import("./pages/admin/RoofingDashboard"));
const HavcsDashboard = React.lazy(() => import("./pages/admin/HavcsDashboard"));
const WindowsDashboard = React.lazy(() => import("./pages/admin/WindowsDashboard"));
const AffiliatePage = React.lazy(() => import("./pages/AffiliatePage"));
const GutterDashboard = React.lazy(() => import("./pages/admin/GutterDashboard"));
const PlumbingDashboard = React.lazy(() => import("./pages/admin/PlumbingDashboard"));
const KitchenDashboard = React.lazy(() => import("./pages/admin/KitchenDashboard"));
const PaintingDashboard = React.lazy(() => import("./pages/admin/PaintingDashboard"));
const V2FormPage = React.lazy(() => import("./pages/V2FormPage"));

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
          element: (
            // <Suspense fallback={<FullPageLoader />}>
            <HomePage />
            // </Suspense>
          ),
        },
        {
          path: "/:slug",
          element: (
            <Suspense fallback={<FullPageLoader />}>
              <FormPage />
            </Suspense>
          ),
        },
        {
          path: "/:slug/v2",
          element: (
            <Suspense fallback={<FullPageLoader />}>
              <V2FormPage />
            </Suspense>
          ),
        },
        {
          path: "/:slug/completed",
          element: (
            <Suspense fallback={<FullPageLoader />}>
              <CompletedPage />
            </Suspense>
          ),
        },
        {
          path: "/thank-you",
          element: (
            // <Suspense fallback={<FullPageLoader />}>
            <ThankyouPage />
            // </Suspense>
          ),
        },
        {
          path: "/privacy-policy",
          element: (
            // <Suspense fallback={<FullPageLoader />}>
            <PrivacyPage />
            // </Suspense>
          ),
        },
        {
          path: "/use-of-terms",
          element: (
            // <Suspense fallback={<FullPageLoader />}>
            <UseOfTerms />
            // </Suspense>
          ),
        },
        {
          path: "/ccpa",
          element: (
            // <Suspense fallback={<FullPageLoader />}>
            <CCPAPage />
            // </Suspense>
          ),
        },
        {
          path: "/contact",
          element: (
            // <Suspense fallback={<FullPageLoader />}>
            <ContactPage />
            // </Suspense>
          ),
        },

        {
          path: "/our-partners",
          element: (
            <Suspense fallback={<FullPageLoader />}>
              <PartnersPage />
            </Suspense>
          ),
        },
        {
          path: "/join-our-affiliate-team",
          element: (
            <Suspense fallback={<FullPageLoader />}>
              <AffiliatePage />
            </Suspense>
          ),
        },
      ],
      errorElement: <h1>Error Page</h1>,
    },

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
              element: (
                <Suspense fallback={<FullPageLoader />}>
                  <SolarDashbiard />
                </Suspense>
              ),
            },
            {
              path: "/admin/bathrooms",
              element: (
                <Suspense fallback={<FullPageLoader />}>
                  <BathroomDashboard />
                </Suspense>
              ),
            },
            {
              path: "/admin/roofing",
              element: (
                <Suspense fallback={<FullPageLoader />}>
                  <RoofingDashboard />
                </Suspense>
              ),
            },
            {
              path: "/admin/windows",
              element: (
                <Suspense fallback={<FullPageLoader />}>
                  <WindowsDashboard />
                </Suspense>
              ),
            },
            {
              path: "/admin/havcs",
              element: (
                <Suspense fallback={<FullPageLoader />}>
                  <HavcsDashboard />
                </Suspense>
              ),
            },
            {
              path: "/admin/kitchen",
              element: (
                <Suspense fallback={<FullPageLoader />}>
                  <KitchenDashboard />
                </Suspense>
              ),
            },
            {
              path: "/admin/gutter",
              element: (
                <Suspense fallback={<FullPageLoader />}>
                  <GutterDashboard />
                </Suspense>
              ),
            },
            {
              path: "/admin/plumbing",
              element: (
                <Suspense fallback={<FullPageLoader />}>
                  <PlumbingDashboard />
                </Suspense>
              ),
            },
            {
              path: "/admin/painting",
              element: (
                <Suspense fallback={<FullPageLoader />}>
                  <PaintingDashboard />
                </Suspense>
              ),
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
      <TrustedForm />
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

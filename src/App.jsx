import { RouterProvider, createBrowserRouter, useLocation } from "react-router-dom";
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
import BoberdooForm from "./pages/CustomForm";
import AdminLayout from "./layouts/AdminLayout";
import AdminPage from "./pages/admin/AdminPage";

const measurementId = import.meta.env.VITE_GOOGLE_MEASUREMENT_ID;

ReactGA.initialize(measurementId);

function App() {
  // const { pathname } = useLocation();
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
      ],
      errorElement: <h1>Error Page</h1>,
    },
    {
      path: "/new",
      element: <BoberdooForm />,
    },
    {
      path: "/admin",
      element: <AdminLayout />,
      children: [
        {
          path: "/admin/dashboard",
          element: <AdminPage />,
        },
      ],
    },
  ]);

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });

    // Script injection logic here
    // const leadIdScriptSrc = "//create.lidstatic.com/campaign/afa5c330-8960-a9ab-a329-b23e9fb88250.js?snippet_version=2";

    // injectScript(leadIdScriptSrc);

    // // TrustedForm script injection (dynamic URL)
    // const trustedFormUrl =
    //   ("https:" === document.location.protocol ? "https" : "http") +
    //   "://api.trustedform.com/trustedform.js?field=xxTrustedFormCertUrl&ping_field=xxTrustedFormPingUrl&l=" +
    //   new Date().getTime() +
    //   Math.random();

    // injectScript(trustedFormUrl);
  }, []);

  //   <script id="LeadiDscript" type="text/javascript">
  //   (function () {
  //     var s = document.createElement("script");
  //     s.id = "LeadiDscript_campaign";
  //     s.type = "text/javascript";
  //     s.async = true;
  //     s.src = "https://create.lidstatic.com/campaign/afa5c330-8960-a9ab-a329-b23e9fb88250.js?snippet_version=2";
  //     var LeadiDscript = document.getElementById("LeadiDscript");
  //     LeadiDscript.parentNode.insertBefore(s, LeadiDscript);
  //   })();
  // </script>
  // useEffect(() => {
  // if (typeof window !== "undefined") {
  //   const script = document.createElement("script");
  //   script.id = "LeadiDscript_campaign";
  //   script.type = "text/javascript";
  //   script.async = true;
  //   script.defer = true;

  //   script.src = `https://create.lidstatic.com/campaign/afa5c330-8960-a9ab-a329-b23e9fb88250.js?snippet_version=2`;
  //   document.body.appendChild(script);
  // }
  // }, []);

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

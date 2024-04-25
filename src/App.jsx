import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import PageLayout from "./layouts/PageLayout";
import HomePage from "./pages/HomePage";
import FormPage from "./pages/FormPage";
import CompletedPage from "./pages/CompletedPage";
import UseOfTerms from "./pages/UseOfTerms";
import PrivacyPage from "./pages/PrivacyPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
          path: "/:slug/completed",
          element: <CompletedPage />,
        },
        {
          path: "/privacy-policy",
          element: <PrivacyPage />,
        },
        {
          path: "/use-of-terms",
          element: <UseOfTerms />,
        },
      ],
      errorElement: <h1>Error Page</h1>,
    },
  ]);

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

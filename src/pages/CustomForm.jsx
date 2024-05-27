import { useEffect } from "react";
import Footer from "~/layouts/Footer";
import Header from "~/layouts/Header";

const BoberdooForm = () => {
  // Create a script element
  useEffect(() => {
    const documents = document.getElementById("boberdoo-form-container");
    const script = document.createElement("script");
    script.src = "https://d3ei5m25ukvnu9.cloudfront.net/forms/embed/245517b3-16a8-11ef-8219-06d238407383";
    script.async = true;

    // Append the script element to the document body
    documents.appendChild(script);

    // Clean up the script when the component unmounts
    return () => {
      documents.removeChild(script);
    };
  }, []);

  return (
    <div>
      {/* You can add additional styling or wrapper elements here */}
      <header className="bg-onPrimaryContainer border-b shadow-md shadow-[rgba(100,100,100,0.16)] w-full">
        <Header />
      </header>
      <div id="boberdoo-form-container"></div>
      <Footer />
    </div>
  );
};

export default BoberdooForm;

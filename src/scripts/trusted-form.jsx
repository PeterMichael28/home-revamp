// Create a separate TrustedForm component
import { useEffect } from "react";

const TrustedForm = () => {
  useEffect(() => {
    const tf = document.createElement("script");
    tf.type = "text/javascript";
    tf.async = true;
    tf.src = `https://api.trustedform.com/trustedform.js?field=xxTrustedFormCertUrl&ping_field=xxTrustedFormPingUrl&l=${Date.now()}${Math.random()}`;
    document.body.appendChild(tf);

    return () => {
      document.body.removeChild(tf);
    };
  }, []);

  return (
    <noscript>
      <img src="https://api.trustedform.com/ns.gif" alt="TrustedForm" />
    </noscript>
  );
};

export default TrustedForm;

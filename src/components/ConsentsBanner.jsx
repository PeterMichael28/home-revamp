import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ConsentBanner = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showCustomize, setShowCustomize] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    functional: false,
    analytics: false,
    advertising: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem("userConsent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAcceptAll = () => {
    setPreferences({
      necessary: true,
      functional: true,
      analytics: true,
      advertising: true,
    });
    saveConsent(true);
  };

  const handleDeclineAll = () => {
    setPreferences({
      necessary: true,
      functional: false,
      analytics: false,
      advertising: false,
    });
    saveConsent(false);
  };

  const handleCustomize = () => {
    setShowCustomize(!showCustomize);
  };

  const handlePreferenceChange = (key) => {
    setPreferences((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSavePreferences = () => {
    saveConsent(true);
  };

  const saveConsent = (accepted) => {
    localStorage.setItem("userConsent", JSON.stringify({ accepted, preferences }));
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }}
      className="fixed bottom-0 left-0 right-0 bg-white shadow-lg rounded-t-lg p-4 sm:p-6 m-2 sm:m-4 max-w-4xl mx-auto text-sm sm:text-base"
    >
      <h2 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">We value your privacy</h2>
      <p className="mb-4 sm:mb-5 text-gray-600">
        We use cookies and similar technologies to improve your experience, analyze usage, and personalize content. By
        clicking &apos;Accept All,&apos; you consent to the use of these technologies. You can customize your
        preferences or view our privacy policy.
      </p>
      <div className="flex flex-wrap gap-2 sm:gap-3 mb-3 sm:mb-4">
        <button
          onClick={handleAcceptAll}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-1.5 px-3 rounded text-xs sm:text-sm transition duration-300"
        >
          Accept All
        </button>
        <button
          onClick={handleCustomize}
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-1.5 px-3 rounded text-xs sm:text-sm transition duration-300"
        >
          Customize
        </button>
        <button
          onClick={handleDeclineAll}
          className="bg-red-600 hover:bg-red-700 text-white font-semibold py-1.5 px-3 rounded text-xs sm:text-sm transition duration-300"
        >
          Decline All
        </button>
      </div>
      <a href="/privacy-policy" className="text-blue-600 hover:underline text-xs sm:text-sm">
        View Privacy Policy
      </a>
      {showCustomize && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="mt-4 border-t pt-3"
        >
          <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">Customize Preferences</h3>
          <div className="space-y-2 sm:space-y-3">
            {Object.entries(preferences).map(([key, value]) => (
              <div key={key} className="flex items-center">
                <input
                  type="checkbox"
                  id={key}
                  checked={value}
                  onChange={() => handlePreferenceChange(key)}
                  disabled={key === "necessary"}
                  className="mr-2 h-4 w-4 text-blue-600"
                />
                <label htmlFor={key} className="select-none text-xs sm:text-sm">
                  {key.charAt(0).toUpperCase() + key.slice(1)} Cookies
                </label>
              </div>
            ))}
          </div>
          <button
            onClick={handleSavePreferences}
            className="mt-3 sm:mt-4 bg-green-600 hover:bg-green-700 text-white font-semibold py-1.5 px-3 rounded text-xs sm:text-sm transition duration-300"
          >
            Save Preferences
          </button>
        </motion.div>
      )}
    </motion.div>
  );
};

export default ConsentBanner;

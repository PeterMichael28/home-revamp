import { classNames } from "~/utils/classNames";
import { useEffect } from "react";
import icons from "~/assets/icons/icons";

const Modal = ({ isOpen, onClose, className, title, subtitle, showCloseBtn = false, children, maxWidth = 480 }) => {
  // useEffect(() => {
  //   if (isOpen) {
  //     document.body.style.overflow = "hidden";
  //   } else {
  //     document.body.style.overflow = "auto";
  //   }
  // }, [isOpen]);

  return (
    <div
      className={classNames(
        "fixed inset-0 z-50 overflow-auto transition-opacity duration-300 scrollbar-hide",
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
    >
      <div className="flex items-center justify-center h-screen">
        <div className="absolute inset-0 bg-black opacity-40" />
        <div
          className={classNames(
            "bg-white p-6 rounded-lg z-10 transform transition-transform duration-300 shadow-md w-full relative",
            isOpen ? "translate-y-0" : "translate-y-full",
            className
          )}
          style={{ maxWidth }}
        >
          <button
            type="button"
            className="text-xl text-gray-dark border bg-red-50 absolute top-2 right-2"
            onClick={onClose}
          >
            {icons.close}
            {/* close */}
          </button>

          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;

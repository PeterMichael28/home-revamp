import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useUserStore } from "~/store/userStore";

const useAuthRedirect = () => {
  const navigate = useNavigate();
  const updateToken = useUserStore((state) => state.updateToken);

  const isDataAuthenticated = (data) => {
    if (data && data.detail === "Authentication credentials were not provided.") {
      updateToken(null);
      toast.error("Unauthorized!!! Login to continue");
      navigate("/admin/login");
    }
  };

  return { isDataAuthenticated };
};

export default useAuthRedirect;

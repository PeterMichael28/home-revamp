import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import FormButton from "~/components/FormPage/FormButton";
import LabelInput from "~/components/FormPage/LabelInput";
import { useUserStore } from "~/store/userStore";

const AuthLoginPage = () => {
  const { token, updateToken } = useUserStore((state) => state);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const url = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    if (token) {
      navigate("/admin");
    }
  }, [navigate, token]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userName || !password) return;
    setIsLoading(true);

    try {
      const response = await fetch(`${url}/api/admin/login/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: userName, password }),
      });

      if (!response.ok) {
        toast.error("Error Login in!, Please try again");
        throw new Error("Error Login in!, Please try again");
      }
      const newData = await response.json();
      sessionStorage.setItem("token", newData.token);
      updateToken(newData.token);
      navigate("/admin");
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      toast.error(error);
      setIsLoading(false);
    }
  };
  return (
    <div className="w-screen h-screen flex justify-center items-center overflow-hidden">
      <div className="max-w-[500px] mx-auto w-full">
        <h2 className="text-3xl font-bold">Admin Login</h2>
        <form className="space-y-6 w-full mt-12" onSubmit={handleSubmit}>
          <LabelInput
            id={"userName"}
            required
            placeholder={"Enter your username"}
            value={userName}
            setValue={setUserName}
            label={"Username"}
          />

          <LabelInput
            id={"password"}
            type="password"
            required
            placeholder={"Enter your password"}
            value={password}
            setValue={setPassword}
            label={"Password"}
          />

          <FormButton
            type="submit"
            text="Submit"
            className="!mt-12"
            disabled={!userName || !password}
            loading={isLoading}
          />
        </form>
      </div>
    </div>
  );
};

export default AuthLoginPage;

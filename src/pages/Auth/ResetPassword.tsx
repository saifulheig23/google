import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useResetPasswordMutation } from "@/redux/api/auth/authApi";
import { useState } from "react";
import { RxEyeClosed, RxEyeOpen } from "react-icons/rx";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";

const ResetPassword = () => {
  const { token } = useParams();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [resetPassword] = useResetPasswordMutation();
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const hadleResetPassword = async (e: any) => {
    e.preventDefault();
    // clear error message if any exists
    setErrorMessage("");
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;
    const toastId = toast.loading("Resetting password...");

    if (password !== confirmPassword) {
      setErrorMessage("password doesn't match");
      toast.error("Passwords doesn't match");
      return;
    }

    try {
      const res = await resetPassword({ token, password }).unwrap();

      if (res?.success === true) {
        toast.success(res?.data?.message, { id: toastId });
        e.target.reset();
        navigate("/login");
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error(error?.data?.message, { id: toastId });
    }
  };

  return (
    <>
      <section className="lg:max-w-7xl h-[85vh] mx-auto  flex flex-col items-center justify-center">
        <Card className="w-full max-w-sm shadow-2xl">
          <form onSubmit={hadleResetPassword}>
            <CardHeader>
              <CardTitle className="text-2xl">Reset Your Password </CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="grid gap-2">
                <label className="block  text-sm font-medium leading-6 text-gray-900">
                  Type New Password
                </label>
                <div className="relative mb-3">
                  <input
                    name="password"
                    type={passwordVisible ? "text" : "password"}
                    className="w-full py-2.5 pl-4 pr-10 border border-gray-300 rounded outline-blue-500"
                    placeholder="Enter password"
                    required
                  />
                  <span
                    className=" text-gray-400 absolute right-0 bottom-0 px-2 flex items-center cursor-pointer   h-full"
                    onClick={togglePasswordVisibility}
                  >
                    {passwordVisible ? (
                      <RxEyeOpen className="w-5 h-5  " />
                    ) : (
                      <RxEyeClosed className="w-5 h-5 " />
                    )}
                  </span>
                </div>
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Confirm Password
                </label>
                <div className="relative ">
                  <input
                    name="confirmPassword"
                    type={confirmPasswordVisible ? "text" : "password"}
                    className="w-full py-2.5 pl-4 pr-10  border border-gray-300 rounded outline-blue-500"
                    placeholder="Confirm password"
                    required
                  />
                  <span
                    className=" text-gray-400 absolute right-0 bottom-0 px-2 flex items-center cursor-pointer   h-full"
                    onClick={toggleConfirmPasswordVisibility}
                  >
                    {confirmPasswordVisible ? (
                      <RxEyeOpen className="w-5 h-5" />
                    ) : (
                      <RxEyeClosed className="w-5 h-5" />
                    )}
                  </span>
                </div>
              </div>
              <div>
                {errorMessage && (
                  <p className="-mb-2 text-red-500 text-sm font-medium leading-6">
                    {errorMessage}
                  </p>
                )}
              </div>
            </CardContent>
            <CardFooter>
              <Button type="submit" className="w-full bg-gradient">
                Send
              </Button>
            </CardFooter>
          </form>
        </Card>
      </section>
    </>
  );
};

export default ResetPassword;

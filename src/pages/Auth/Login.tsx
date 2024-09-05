/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useLoginMutation } from "@/redux/api/auth/authApi";
import { useCurrentToken } from "@/redux/features/authSlice";
import { useAppSelector } from "@/redux/hooks";
import { useEffect } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { MdErrorOutline } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const [login] = useLoginMutation();
  const token = useAppSelector(useCurrentToken);
  // console.log("from useLoginMutation", { isError, isLoading, isSuccess, error});

  useEffect(() => {
    if (token && token !== null) {
      navigate("/");
    }
  }, []);

  const handleLogin = async (data: FieldValues) => {
    const toastId = toast.loading("Logging in...");

    try {
      const loginInfo = {
        email: data.email,
        password: data.password,
      };
      const res = await login(loginInfo).unwrap();

      if (res?.success) {
        toast.success(res?.data?.message, { id: toastId, duration: 2000 });
        localStorage.setItem("userEmail", loginInfo.email);
        navigate("/verify");
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error(error?.data?.message, { id: toastId });
    }
  };

  return (
    <section className="lg:mt-16 lg:w-[450px] md:w-1/2 mx-auto lg:border lg:rounded-xl lg:shadow-md bg-gradient">
      <div className="bg-white lg:m-1 lg:rounded-lg px-4 py-5 mx-auto">
        <h4 className=" text-2xl font-semibold">Login</h4>
        <p>Enter your email below to login to your account</p>

        <form onSubmit={handleSubmit(handleLogin)} className=" ">
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                {...register("email", { required: true })}
                type="email"
                placeholder="m@example.com"
              />
              {errors.email && (
                <span className="text-sm text-red-500 flex items-center">
                  <MdErrorOutline className="mr-1" /> Email is required
                </span>
              )}
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link
                  to="/forgot-password"
                  className="ml-auto inline-block text-sm underline"
                >
                  Forgot your password?
                </Link>
              </div>
              <Input
                {...register("password", { required: true })}
                type="password"
                placeholder="•••••••••"
              />
              {errors.password && (
                <span className="text-sm text-red-500 flex items-center">
                  <MdErrorOutline className="mr-1" /> Password is required
                </span>
              )}
            </div>
            <Button type="submit" className="w-full">
              Login
            </Button>
          </div>
        </form>
        <Button variant="outline" className="w-full mt-4">
          <FcGoogle size={20} className="mr-2" />
          Login with Google
        </Button>
        <div className="mt-4 text-center text-sm flex items-center justify-center">
          <div>
            Don&apos;t have an account?{" "}
            <Link to="/signUp" className="ml-2 underline">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Login;

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useLoginMutation } from "@/redux/api/auth/authApi";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { MdErrorOutline } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

const LoginModal = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const [login] = useLoginMutation();
  // console.log("from useLoginMutation", { isError, isLoading, isSuccess, error});

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
        setIsDialogOpen(false);
        navigate("/verify");
      }

      // const user = jwtDecode(res.token) as TUser;

      // console.log("from login modal: ", res)

      // dispatch(setUser({ user: user, token: res.token }));
      // toast.success("Login Successful", { id: toastId, duration: 2000 });
      // navigate("/");
    } catch (error: any) {
      toast.error(error?.data?.message, { id: toastId });
    }
  };

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Link to="">Login</Link>
      </DialogTrigger>
      <DialogContent
        className="sm:max-w-[425px]"
        onInteractOutside={(e) => e.preventDefault()}
      >
        <DialogHeader className="mb-4">
          <DialogTitle className=" text-2xl font-semibold">Login</DialogTitle>
          <DialogDescription>
            Enter your email below to login to your account
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit(handleLogin)}>
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
                  onClick={() => setIsDialogOpen(false)}
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
        <Button variant="outline" className="w-full ">
          <FcGoogle size={20} className="mr-2" />
          Login with Google
        </Button>
        <div className="mt-4 text-center text-sm flex items-center justify-center">
          <DialogFooter>
            Don&apos;t have an account?{" "}
            <DialogClose asChild>
              <Link to="/signUp" className="ml-2 underline">
                Sign up
              </Link>
            </DialogClose>
          </DialogFooter>
        </div>

        {/* <DialogFooter className="mt-4">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
          <Button type="submit">Save changes</Button>
        </DialogFooter> */}
      </DialogContent>
    </Dialog>
  );
};
export default LoginModal;

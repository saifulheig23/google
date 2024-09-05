import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useVerifyLoginMutation } from "@/redux/api/auth/authApi";
import { setUser, TUser } from "@/redux/features/authSlice";
import { useAppDispatch } from "@/redux/hooks";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const VerifyOTP = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [verifyLogin] = useVerifyLoginMutation();
  const email = localStorage.getItem("userEmail");

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleOTP = async (e: any) => {
    e.preventDefault();
    const otp = e.target.otp.value;
    const toastId = toast.loading("Logging in...");

    try {
      const verifyInfo = {
        email,
        otp,
      };
      const res = await verifyLogin(verifyInfo).unwrap();
      const user = jwtDecode(res.token) as TUser;

      dispatch(setUser({ user: user, token: res.token }));
      toast.success("Login Successful", { id: toastId, duration: 2000 });
      navigate("/");
      localStorage.removeItem("userEmail");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error(error?.data?.message, { id: toastId });
    }
  };

  return (
    <section className="lg:max-w-7xl h-[85vh] mx-auto  flex flex-col items-center justify-center">
      <Card className="w-full max-w-sm shadow-2xl">
        <form onSubmit={handleOTP}>
          <CardHeader>
            <CardTitle className="text-2xl">Verify OTP </CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Enter OTP</Label>
              <Input
                className="text-lg  tracking-widest"
                name="otp"
                type="text"
                placeholder="Your OTP here"
                required
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full bg-gradient">
              Verify
            </Button>
          </CardFooter>
        </form>
      </Card>
    </section>
  );
};

export default VerifyOTP;

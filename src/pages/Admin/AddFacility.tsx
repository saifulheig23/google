import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useCreateFacilityMutation } from "@/redux/api/facilityApi/facilityApi";
import { ChevronLeft } from "lucide-react";
import { FieldValues, useForm } from "react-hook-form";
import { MdErrorOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const AddFacility = () => {
  const navigate = useNavigate();
  const [createFacility] = useCreateFacilityMutation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleAddFacility = async (data: FieldValues) => {
    const toastId = toast.loading("Adding facility...");

    try {
      const newFacility = {
        name: data.name,
        description: data.description,
        pricePerHour: Number(data.pricePerHour),
        location: data.location,
        imageUrl: data.imageUrl,
      };
      const res = await createFacility(newFacility);
      console.log(res.data.success);
      if (res.data.success === true) {
        toast.success("Facility added successfully", { id: toastId });
        reset();
      }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toast.error("Something went wrong. Try Again!", { id: toastId });
    }
  };

  return (
    <>
      <div className="mb-16 flex items-center justify-between">
        <Button onClick={() => navigate(-1)} className="">
          {" "}
          <ChevronLeft size={15} className="mr-2" />
          Go Back
        </Button>
      </div>

      <div className=" lg:max-w-2xl mx-auto">
        <Card className="w-full ">
          <CardHeader>
            <CardTitle className="text-2xl">Add New Facility</CardTitle>
            <CardDescription>Add new facility to database.</CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit(handleAddFacility)}>
            <CardContent className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  {...register("name", { required: true })}
                  id="name"
                  type="text"
                  placeholder="Facility Name"
                />
                {errors.name && (
                  <span className="text-sm text-red-500 flex items-center">
                    <MdErrorOutline className="mr-1" /> This field is required
                  </span>
                )}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="description">description</Label>
                <Textarea
                  {...register("description", { required: true })}
                  placeholder="Facility description"
                />
                {errors.description && (
                  <span className="text-sm text-red-500 flex items-center">
                    <MdErrorOutline className="mr-1" /> This field is required
                  </span>
                )}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="pricePerHour">Price per Hour</Label>
                <Input
                  {...register("pricePerHour", { required: true })}
                  id="pricePerHour"
                  type="number"
                  placeholder="Price per Hour"
                />
                {errors.pricePerHour && (
                  <span className="text-sm text-red-500 flex items-center">
                    <MdErrorOutline className="mr-1" /> This field is required
                  </span>
                )}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="location">Location</Label>
                <Input
                  {...register("location", { required: true })}
                  id="location"
                  type="text"
                  placeholder="Facility Location"
                />
                {errors.location && (
                  <span className="text-sm text-red-500 flex items-center">
                    <MdErrorOutline className="mr-1" /> This field is required
                  </span>
                )}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="imageUrl">Image URL</Label>
                <Input
                  {...register("imageUrl", { required: true })}
                  id="imageUrl"
                  type="text"
                  placeholder="Photo URL"
                />
                {errors.imageUrl && (
                  <span className="text-sm text-red-500 flex items-center">
                    <MdErrorOutline className="mr-1" /> This field is required
                  </span>
                )}
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Add</Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </>
  );
};

export default AddFacility;

import { Button } from "@/components/ui/button";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useEditFacilityMutation } from "@/redux/api/facilityApi/facilityApi";
import { Pencil } from "lucide-react";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { toast } from "sonner";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const EditFacility = ({ facility }:any) => {
  const [editFacility] = useEditFacilityMutation();
  const [isOpen, setIsOpen] = useState(false);
  const {
    register,
    handleSubmit,
  } = useForm();

  const handleEdit = async (data: FieldValues) => {
    const toastId = toast.loading("Updating data...");
    const id = facility?._id;
    const editedData = {
      name: data.name,
      description: data.description,
      pricePerHour: data.pricePerHour,
      location: data.location,
      imageUrl: data.imageUrl,
    };

    try {
      const res = await editFacility({ id, ...editedData }).unwrap();
      if (res.success === true) {
        toast.success("Data updated successfully", { id: toastId });
        setIsOpen(false);
      }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toast.error("Something went wrong. Try Again!", { id: toastId });
    }
  };

  return (
    <>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button
            onClick={() => setIsOpen(true)}
            className="w-full flex justify-start"
            variant="ghost"
          >
            <Pencil className="mr-2 h-4 w-4" />
            Edit
          </Button>
        </DialogTrigger>
        <DialogContent
          className="sm:max-w-[425px] lg:max-w-3xl "
          onInteractOutside={(e) => e.preventDefault()}
        >
          <DialogHeader className="mb-4">
            <DialogTitle className="text-2xl font-semibold">
              Edit Facility
            </DialogTitle>
            <DialogDescription>
              Enter your data below to edit to facility
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit(handleEdit)}>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  {...register("name")}
                  id="name"
                  type="text"
                  defaultValue={facility?.name}
                  placeholder="Facility Name"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="description">description</Label>
                <Textarea
                  {...register("description")}
                  defaultValue={facility?.description}
                  placeholder="Facility description"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="pricePerHour">Price per Hour</Label>
                <Input
                  {...register("pricePerHour")}
                  defaultValue={facility?.pricePerHour}
                  id="pricePerHour"
                  type="number"
                  placeholder="Price per Hour"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="location">Location</Label>
                <Input
                  {...register("location")}
                  defaultValue={facility?.location}
                  id="location"
                  type="text"
                  placeholder="Facility Location"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="imageUrl">Image URL</Label>
                <Input
                  {...register("imageUrl")}
                  defaultValue={facility?.imageUrl}
                  id="imageUrl"
                  type="text"
                  placeholder="Photo URL"
                />
              </div>
            </div>
            <div className="mt-6">
              <Button className="w-full">Save Changes</Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default EditFacility;

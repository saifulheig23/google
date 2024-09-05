import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import EditFacility from "@/pages/Admin/EditFacility";
import { useDeleteFacilityMutation } from "@/redux/api/facilityApi/facilityApi";
import { Ellipsis, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "./ui/button";
import { TableCell, TableRow } from "./ui/table";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ManageFacilitiesRows = ({ facility, index }: {facility:any, index:number}) => {
  const [deleteFacility] = useDeleteFacilityMutation();

  const handleDelete = async (id: string) => {
    const res = await deleteFacility(id);

    if (res.data.success === true) {
      toast.success("Facility deleted successfully");
    }
  };

  return (
    <>
      <TableRow>
        <TableCell className="font-medium">{index + 1}</TableCell>
        <TableCell className="hidden sm:table-cell  p-1">
          <img
            alt="Product image"
            className="aspect-square rounded-md object-cover"
            src={facility?.imageUrl}
          />
        </TableCell>

        <TableCell className="font-medium">{facility?.name}</TableCell>
        <TableCell>BDT. {facility?.pricePerHour}</TableCell>
        <TableCell>{facility?.location}</TableCell>
        <TableCell>{facility?.createdAt}</TableCell>
        <TableCell className="">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Ellipsis size={20} />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <EditFacility facility={facility} />
              <DropdownMenuSeparator />

              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button
                    className="w-full  flex justify-start"
                    variant="ghost"
                  >
                    <Trash2 className="mr-2 h-4 w-4" /> Delete
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      Are you absolutely sure?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      This will delete your data from our servers.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction
                      onClick={() => handleDelete(facility?._id)}
                    >
                      Continue
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </DropdownMenuContent>
          </DropdownMenu>
        </TableCell>
      </TableRow>
    </>
  );
};

export default ManageFacilitiesRows;

import BookingBadge from "@/components/BookingBadge";
import Loader from "@/components/loader/Loader";
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
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  useCancelBookingMutation,
  useViewBookingsQuery,
} from "@/redux/api/bookingsApi/bookingsApi";
import { Ellipsis, Trash2 } from "lucide-react";
import { toast } from "sonner";
const ViewBookings = () => {
  const { data, isLoading } = useViewBookingsQuery(undefined);
  const [cancelBooking] = useCancelBookingMutation();
  const bookings = data?.data;

  const handleCancel = async (id: string) => {
    const toastId = toast.loading("Cancelling booking...");

    try {
      const res = await cancelBooking(id);
      if (res?.data?.success === true) {
        toast.success("Booking cancelled successfully", {
          id: toastId,
          duration: 1000,
        });
      } else {
        toast.error("Failed to cancel", { id: toastId });
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toast.error("Something went wrong. Try Again!");
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Serial</TableHead>
            <TableHead>Facility</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Price/hr</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Booking Date</TableHead>
            <TableHead>Start Time</TableHead>
            <TableHead>End Time</TableHead>
            <TableHead>Payable Amount</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {bookings
            ?.slice()
            .reverse()
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            .map((booking: any, index: number) => (
              <TableRow key={booking?._id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell className="font-medium">
                  {booking?.facility.name}
                </TableCell>
                <TableCell>{booking?.facility.location}</TableCell>
                <TableCell>{booking?.facility.pricePerHour}</TableCell>
                <TableCell>
                  <BookingBadge status={booking?.isBooked} />
                </TableCell>
                <TableCell>{booking?.date}</TableCell>
                <TableCell>{booking?.startTime}</TableCell>
                <TableCell>{booking?.endTime}</TableCell>
                <TableCell>{booking?.payableAmount}</TableCell>
                <TableCell className="">
                  {booking?.isBooked !== "cancelled" && (
                    <DropdownMenu>
                      <DropdownMenuTrigger>
                        <Ellipsis size={20} />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuSeparator />

                        <AlertDialog>
                          <AlertDialogTrigger asChild>
                            <Button
                              className="w-full  flex justify-start"
                              variant="ghost"
                            >
                              <Trash2 className="mr-2 h-4 w-4" /> Cancel
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
                                onClick={() => handleCancel(booking?._id)}
                              >
                                Continue
                              </AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  )}
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </>
  );
};

export default ViewBookings;

/* eslint-disable @typescript-eslint/no-explicit-any */
import BookingsRows from "@/components/BookingsRows";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetAllBookingsQuery } from "@/redux/api/bookingsApi/bookingsApi";
import { Loader2 } from "lucide-react";

const Bookings = () => {
  const { data, isLoading } = useGetAllBookingsQuery(undefined);
  const bookings = data?.data;

  if (isLoading) {
    return (
      <div className="h-[85vh] flex items-center justify-center text-2xl font-semibold ">
        <Loader2 className="animate-spin mr-3" />
        Loading...
      </div>
    );
  }

  return (
    <>
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-lg font-semibold md:text-2xl">All Bookings</h1>
      </div>
      <div
        className=" rounded-lg border border-dashed shadow-sm"
        x-chunk="dashboard-02-chunk-1"
      >
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="font-black bg-gray-100">
                Client Name
              </TableHead>
              <TableHead className="font-black bg-gray-100">Email</TableHead>
              <TableHead className="font-black bg-gray-100">Contact</TableHead>
              <TableHead className="font-black bg-gray-100">Address</TableHead>
              <TableHead className="font-black bg-gray-100">Facility</TableHead>
              <TableHead className="font-black bg-gray-100">location</TableHead>
              <TableHead className="font-black bg-gray-100">Price/hr</TableHead>
              <TableHead className="font-black bg-gray-100">
                Booking Status
              </TableHead>
              <TableHead className="font-black bg-gray-100">Date</TableHead>
              <TableHead className="font-black bg-gray-100">
                Start Time
              </TableHead>
              <TableHead className="font-black bg-gray-100">End Time</TableHead>
              <TableHead className="font-black bg-gray-100">
                Payable Amount
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {bookings?.map((booking:any) => (
              <BookingsRows key={booking?._id} booking={booking} />
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
};

export default Bookings;

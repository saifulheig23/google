import BookingBadge from "./BookingBadge";
import { TableCell, TableRow } from "./ui/table";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const BookingsRows = ({ booking }:any) => {
  console.log(booking);
  return (
    <>
      <TableRow>
        <TableCell className="bg-sky-100 font-medium border">
          {booking?.user?.name}
        </TableCell>
        <TableCell className="bg-sky-100 border">
          {booking?.user?.email}
        </TableCell>
        <TableCell className="bg-sky-100 border">
          {booking?.user?.phone}
        </TableCell>
        <TableCell className="bg-sky-100 border">
          {booking?.user?.address}
        </TableCell>
        <TableCell className="bg-lime-100 border">
          {booking?.facility?.name}
        </TableCell>
        <TableCell className="bg-lime-100 border">
          {booking?.facility?.location}
        </TableCell>
        <TableCell className="bg-lime-100 border">
          BDT. {booking?.facility?.pricePerHour}
        </TableCell>
        <TableCell className="bg-teal-100 border">
          <BookingBadge status={booking?.isBooked} />
        </TableCell>
        <TableCell className="bg-teal-100 border">{booking?.date}</TableCell>
        <TableCell className="bg-teal-100 border">
          {booking?.startTime}
        </TableCell>
        <TableCell className="bg-teal-100 border">{booking?.endTime}</TableCell>
        <TableCell className="bg-teal-100 border">
          BDT. {booking?.payableAmount}
        </TableCell>
      </TableRow>
    </>
  );
};

export default BookingsRows;

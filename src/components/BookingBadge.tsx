import { Badge } from "@/components/ui/badge";

const BookingBadge = ({ status }: { status: string }) => {
  const getBadgeVariant = (status: string) => {
    switch (status) {
      case "confirmed":
        return "bg-green-600 ";
      case "unconfirmed":
        return "bg-yellow-600";
      case "cancelled":
        return "bg-red-500";
      default:
        return "outline"; // default variant
    }
  };

  return (
    <Badge className={getBadgeVariant(status)}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </Badge>
  );
};

export default BookingBadge;

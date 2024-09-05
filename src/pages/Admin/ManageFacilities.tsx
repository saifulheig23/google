/* eslint-disable @typescript-eslint/no-explicit-any */
import ManageFacilitiesRows from "@/components/ManageFacilitiesRows";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetAllFacilitiesQuery } from "@/redux/api/facilityApi/facilityApi";
import { CirclePlus, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";

const ManageFacilities = () => {
  const { data, isLoading } = useGetAllFacilitiesQuery(undefined);
  const facilities = data?.data;
  // console.log(facilities);

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
        <h1 className="text-lg font-semibold md:text-2xl">Inventory</h1>
        <Link to="/admin/add-facility">
          <Button className="">
            <CirclePlus size={15} className="mr-2" />
            Add Facility
          </Button>
        </Link>
      </div>
      <div
        className=" rounded-lg border border-dashed shadow-sm"
        x-chunk="dashboard-02-chunk-1"
      >
        <Table>
          <TableCaption>A list of all the facilities.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-1">Serial</TableHead>
              <TableHead className="w-[100px]">image</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Price/hr</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Created at</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {facilities?.map((facility:any, index:number) => (
              <ManageFacilitiesRows
                key={facility?._id}
                facility={facility}
                index={index}
              />
            ))}

            {/* <TableRow>
      <TableCell className="font-medium">INV001</TableCell>
      <TableCell>Paid</TableCell>
      <TableCell>Credit Card</TableCell>
      <TableCell>Credit Card</TableCell>
      <TableCell>Credit Card</TableCell>
      <TableCell>$250.00</TableCell>
    </TableRow> */}
          </TableBody>
        </Table>
      </div>
    </>
  );
};

export default ManageFacilities;

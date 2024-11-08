"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MdCreate, MdOutlineDelete, MdOutlinePeople } from "react-icons/md";

export type Users = {
  id: string;
  username: string;
  userRole: string;
  contactNumber: string;
  position: string;
  dateAdded: string;
  email: string;
};

export const columns: ColumnDef<Users>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "username",
    header: ({}) => (
      <div>
        <h3 className="text-[#0E0E2C] font-semibold text-sm capitalize">Name</h3>
      </div>
    ),
    cell: ({ row }) => (
      <div className="flex flex-wrap gap-4 py-4">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div>
          <h2 className="text-sm text-[#0E0E2C] capitalize">{row.original.username}</h2>
          <h1 className="text-[14px] text-[#71717A]">{row.original.email}</h1>
        </div>
      </div>
    ),
  },
  {
    accessorKey: "position",
    header: ({}) => (
      <div>
        <h3 className="text-[#0E0E2C] font-semibold text-sm">Position</h3>
      </div>
    ),
  },
  {
    accessorKey: "contactNumber",
    header: ({}) => (
      <div>
        <h3 className="text-[#0E0E2C] font-semibold text-sm">Contact No.</h3>
      </div>
    ),
  },
  {
    accessorKey: "userRole",
    header: ({}) => (
      <div>
        <h3 className="text-[#0E0E2C] font-semibold text-sm">User Role</h3>
      </div>
    ),
  },
  {
    accessorKey: "dateAdded",
    header: ({}) => (
      <div>
        <h3 className="text-[#0E0E2C] font-semibold text-sm">Date Added</h3>
      </div>
    ),
  },
  {
    id: "actions",
    cell: ({}) => {
      return (
        <div className="flex justify-end">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <MdOutlinePeople /> View profile
              </DropdownMenuItem>
              <DropdownMenuItem>
                <MdCreate />
                Edit details
              </DropdownMenuItem>
              <DropdownMenuItem className="text-red-600 hover:text-red-600 focus:text-red-600">
                <MdOutlineDelete />
                Delete employee
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      );
    },
  },
];

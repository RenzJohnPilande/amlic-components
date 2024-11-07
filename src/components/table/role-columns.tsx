"use client";

import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MdCreate, MdOutlineDelete, MdOutlinePeople } from "react-icons/md";

export type Roles = {
  roleName: string;
  userAccess: string;
};

export const rolecolumns: ColumnDef<Roles>[] = [
  {
    accessorKey: "roleName",
    header: ({}) => (
      <div>
        <h3 className="text-[#0E0E2C] font-semibold text-[16px]">Role</h3>
      </div>
    ),
    cell: ({ row }) => {
      return (
        <div className="flex flex-wrap flex-col w-full">
          <div className="flex items-center gap-4 py-4">
            <div className="p-2 bg-red-600 rounded-full"></div>
            <div>
              <h2 className="text-[16px] text-[#0E0E2C] capitalize">{row.original.roleName}</h2>
            </div>
          </div>
          <div className="flex">
            <h3>{row.original.userAccess}</h3>
          </div>
        </div>
      );
    },
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

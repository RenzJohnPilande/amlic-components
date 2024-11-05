import { Users, columns } from "@/components/table/employee-columns";
import { DataTable } from "@/components/table/data-table";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  MdAddCircleOutline,
  MdHome,
  MdOutlineArrowDropDown,
  MdOutlineFilterList,
  MdSearch,
} from "react-icons/md";
import { SecondaryButton } from "@/components/secondary-button";
import { PrimaryButton } from "@/components/primary-button";
import { IconButton } from "@/components/icon-button";
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

async function getData(): Promise<Users[]> {
  return [
    {
      id: "728ed52f",
      username: "Jane Doe",
      userRole: "Admin",
      contactNumber: "+639090312543",
      position: "CEO",
      dateAdded: "july 19, 2024",
      email: "janedoe@amlic.com",
    },
    {
      id: "728ed52f",
      username: "Jane Doe",
      userRole: "Admin",
      contactNumber: "+639090312543",
      position: "CEO",
      dateAdded: "july 19, 2024",
      email: "janedoe@amlic.com",
    },
    {
      id: "728ed52f",
      username: "Jane Doe",
      userRole: "Admin",
      contactNumber: "+639090312543",
      position: "CEO",
      dateAdded: "july 19, 2024",
      email: "janedoe@amlic.com",
    },
  ];
}

const data = await getData();
export const Employee = () => {
  return (
    <div className="flex flex-wrap w-full p-[1.875rem]">
      <div className="flex justify-between items-center w-full">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/" className="text-[16px] text-[#0E0E2C]">
                <MdHome />
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/components" className="text-[16px] text-[#0E0E2C]">
                HRIS
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-[16px] font-semibold">Employee</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="">
            <p className="font-medium text-[16px] text-[#0E0E2C]">Jane Doe</p>
            <p className="text-[14px] text-[#71717A]">Ceo</p>
          </div>
          <div className="flex items-center justify-center border rounded-full [w-20px h-[20px]">
            <MdOutlineArrowDropDown className="w-[18px]" />
          </div>
        </div>
      </div>
      <div className="w-full py-[3.813rem]">
        <h1 className="text-[40px] font-semibold">Employee</h1>
        <p>Manage your team members and their account permissions here.</p>
        <div className="flex flex-wrap w-full justify-between items-center py-5">
          <div className="flex gap-2">
            <h2 className="text-[24px] font-semibold">All users</h2>
            <div className="flex text-[24px] font-semibold justify-center items-center bg-[#263E63] rounded-[8px] text-white w-[39px] h-[37px]">
              3
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <div className="flex content-center items-center border px-3 py-2">
              <MdSearch className="me-2" />
              <input type="text" placeholder="Search" className="border-0 outline-none w-[160px]" />
            </div>
            <SecondaryButton label="Filters" icon={<MdOutlineFilterList />} />
            <PrimaryButton label="Add Employee" icon={<MdAddCircleOutline />} />
          </div>
        </div>
        <div>
          <DataTable columns={columns} data={data} />
        </div>
        <div className="flex justify-between py-5">
          <p className="text-[14px] text-[#64748B]">
            Showing: <span className="text-[#0E0E2C] font-bold">10</span> of <span>11,473</span>
          </p>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <p className="text-[14px] font-medium">Rows per page:</p>
              <Select defaultValue="10">
                <SelectTrigger className="w-[72px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="10">10</SelectItem>
                  <SelectItem value="20">20</SelectItem>
                  <SelectItem value="50">50</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center gap-2">
              <p className="text-[14px] font-medium">Page 1 of 10</p>
              <IconButton icon={<ChevronsLeft />} />
              <IconButton icon={<ChevronLeft />} />
              <IconButton icon={<ChevronRight />} />
              <IconButton icon={<ChevronsRight />} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

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
  MdKeyboardArrowRight,
  MdOutlineArrowDropDown,
  MdOutlineFilterList,
  MdSearch,
} from "react-icons/md";
import { SecondaryButton } from "@/components/secondary-button";
import { PrimaryButton } from "@/components/primary-button";
import { IconButton } from "@/components/icon-button";
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { NextButton } from "@/components/NextButton";

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

interface UserManagementProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export const UserManagement = ({ activeTab, onTabChange }: UserManagementProps) => {
  return (
    <div className="flex flex-wrap w-full p-[1.875rem]">
      <div className="flex justify-between items-center w-full">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/" className="text-sm text-[#0E0E2C]">
                <MdHome />
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/components" className="text-sm text-[#0E0E2C]">
                HRIS
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-sm font-semibold">Employee</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="">
            <p className="font-medium text-sm text-[#0E0E2C]">Jane Doe</p>
            <p className="text-[14px] text-[#71717A]">Ceo</p>
          </div>
          <div className="flex items-center justify-center border rounded-full [w-20px h-[20px]">
            <MdOutlineArrowDropDown className="w-[18px]" />
          </div>
        </div>
      </div>
      <div className="w-full py-2">
        <h1 className="text-[40px] font-semibold">Employee</h1>
        <p>Manage your team members and their account permissions here.</p>
        <div className="flex flex-wrap w-full justify-between items-center py-5">
          <div className="flex gap-4 items-center">
            <button onClick={() => onTabChange("users")} className="flex gap-2">
              <h2 className="text-[24px] font-semibold">All users</h2>
              <div className="flex text-[24px] font-semibold justify-center items-center bg-[#263E63] rounded-[8px] text-white w-[39px] h-[37px]">
                3
              </div>
            </button>
            <button
              onClick={() => onTabChange("roles")}
              className="flex gap-2 border-l px-3 text-[#71717A]"
            >
              <h2 className="text-[24px] font-semibold">User role manager</h2>
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            <div className="flex content-center items-center border px-3 py-2">
              <MdSearch className="me-2" />
              <input type="text" placeholder="Search" className="border-0 outline-none w-[160px]" />
            </div>
            <SecondaryButton label="Filters" icon={<MdOutlineFilterList />} />
            <Dialog>
              <DialogTrigger>
                <PrimaryButton label="Add Users" icon={<MdAddCircleOutline />} />
              </DialogTrigger>
              <DialogContent>
                <div className="flex flex-wrap w-full justify-center items-center gap-2">
                  <div className="flex flex-col items-center justify-center py-3">
                    <h1 className="text-[#0E0E2C] text-[24px] font-semibold">Add Users</h1>
                    <h2 className="text-[#0E0E2C] text-sm">
                      Fill up all the fields to proceed to other tab.
                    </h2>
                  </div>
                  <div className="flex flex-wrap justify-center gap-4 pb-5">
                    <div className="flex justify-center items-center gap-3">
                      <div className="flex gap-1">
                        <p className="flex items-center justify-center w-[33px] h-[33px] rounded-full border border-[#0E0E2C] text-[#0E0E2C] text-sm">
                          1
                        </p>
                        <p className="flex items-center justify-center capitalize text-[#0E0E2C] text-sm">
                          personal
                        </p>
                      </div>
                      <div className="flex gap-1">
                        <hr className="border-[#71717A] w-[60px]" />
                      </div>
                      <div className="flex gap-1">
                        <p className="flex items-center justify-center w-[33px] h-[33px] rounded-full border border-[#0E0E2C] text-[#0E0E2C] text-sm">
                          2
                        </p>
                        <p className="flex items-center justify-center capitalize text-[#0E0E2C] text-sm">
                          permission
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center justify-center w-full max-w-[300px]">
                      <label
                        htmlFor="dropzone-file"
                        className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                      >
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          <svg
                            className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 16"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                            />
                          </svg>
                          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                            <span className="font-semibold">Click to upload</span> or drag and drop
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            SVG, PNG, JPG or GIF (MAX. 800x400px)
                          </p>
                        </div>
                        <input id="dropzone-file" type="file" className="hidden" />
                      </label>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-5 w-full">
                    <div className="flex w-full grid grid-cols-2 gap-3">
                      <div className="flex flex-wrap w-full gap-3">
                        <Label className="text-sm" htmlFor="name">
                          Name
                        </Label>
                        <Input className="w-full border-[#71717A]" id="name" type="text" />
                      </div>
                      <div className="flex flex-wrap w-full gap-3">
                        <Label className="text-sm" htmlFor="email">
                          Email
                        </Label>
                        <Input className="w-full border-[#71717A]" id="email" type="email" />
                      </div>
                      <div className="flex flex-wrap w-full gap-3">
                        <Label className="text-sm" htmlFor="contact">
                          Contact No.
                        </Label>
                        <Input className="w-full border-[#71717A]" id="contact" type="text" />
                      </div>
                      <div className="flex flex-wrap w-full gap-3">
                        <Label className="text-sm">Position</Label>
                        <Select>
                          <SelectTrigger className="border-[#71717A]">
                            <SelectValue placeholder="" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="light">Light</SelectItem>
                            <SelectItem value="dark">Dark</SelectItem>
                            <SelectItem value="system">System</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="flex flex-wrap w-full gap-2">
                      <Label className="text-sm">Department</Label>
                      <Select>
                        <SelectTrigger className="border-[#71717A]">
                          <SelectValue placeholder="" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="light">Light</SelectItem>
                          <SelectItem value="dark">Dark</SelectItem>
                          <SelectItem value="system">System</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex flex-wrap w-full gap-2">
                      <Label className="text-sm" htmlFor="password">
                        Password
                      </Label>
                      <Input className="w-full border-[#71717A]" id="password" type="password" />
                    </div>
                    <div className="flex w-full justify-center gap-5">
                      <SecondaryButton label="Cancel" />
                      <NextButton label="Next" icon={<MdKeyboardArrowRight />} />
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
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

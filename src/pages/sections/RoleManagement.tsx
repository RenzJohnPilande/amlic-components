import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  MdAddCircleOutline,
  MdHome,
  MdOutlineAddModerator,
  MdOutlineArrowDropDown,
  MdSearch,
} from "react-icons/md";
import { PrimaryButton } from "@/components/primary-button";
import { MoreHorizontal } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { RoleContainer } from "@/components/role-container";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MdCreate, MdOutlineDelete, MdOutlinePeople } from "react-icons/md";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { SecondaryButton } from "@/components/secondary-button";

interface RoleManagementProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export const RoleManagement = ({ activeTab, onTabChange }: RoleManagementProps) => {
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
              <h2 className="text-[24px] font-semibold text-[#71717A]">All users</h2>
              <div className="flex text-[24px] font-semibold justify-center items-center bg-[#71717A] rounded-[8px] text-white w-[39px] h-[37px]">
                3
              </div>
            </button>
            <button onClick={() => onTabChange("roles")} className="flex gap-2 border-l px-3">
              <h2 className="text-[24px] font-semibold">User role manager</h2>
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            <div className="flex content-center items-center border px-3 py-2">
              <MdSearch className="me-2" />
              <input type="text" placeholder="Search" className="border-0 outline-none w-[160px]" />
            </div>
            <Dialog>
              <DialogTrigger>
                <PrimaryButton label="New Role" icon={<MdOutlineAddModerator />} />
              </DialogTrigger>
              <DialogContent>
                <div className="flex flex-wrap w-full text-[#0E0E2C] gap-4">
                  <div className="flex border-b border-[#71717A] py-4 w-full">
                    <h1 className="text-xl font-semibold">Create new role</h1>
                  </div>
                  <div className="flex flex-wrap w-full gap-3">
                    <Label className="text-sm">Role Name</Label>
                    <Input type="text" className="border-[#4A4A68]" />
                    <div className="flex w-full justify-end">
                      <PrimaryButton label="Add" icon={<MdAddCircleOutline />} />
                    </div>
                  </div>
                  <div className="flex flex-wrap w-full gap-3">
                    <Label className="text-sm">Members</Label>
                    <div className="flex content-center items-center w-full border px-3 py-2">
                      <MdSearch className="me-2" />
                      <input
                        type="text"
                        placeholder="Add members by name of email"
                        className="text-sm border-0 outline-none w-full"
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap w-full items-center gap-4 border-b border-[#71717A] pb-4">
                    <div className="flex flex-wrap justify-between items-center w-full">
                      <div className="flex items-center gap-4">
                        <Avatar>
                          <AvatarImage src="https://github.com/shadcn.png" />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col justify-center">
                          <p className="text-lg font-semibold">Jane Doe</p>
                          <p className="text-sm text-[#71717A]">janedoe@amlic.com</p>
                        </div>
                      </div>
                      <div className="flex items-center flex-wrap">
                        <Checkbox />
                      </div>
                    </div>
                    <div className="flex flex-wrap justify-between items-center w-full">
                      <div className="flex items-center gap-4">
                        <Avatar>
                          <AvatarImage src="https://github.com/shadcn.png" />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col justify-center">
                          <p className="text-lg font-semibold">Jane Doe</p>
                          <p className="text-sm text-[#71717A]">janedoe@amlic.com</p>
                        </div>
                      </div>
                      <div className="flex items-center flex-wrap">
                        <Checkbox />
                      </div>
                    </div>
                    <div className="flex flex-wrap justify-between items-center w-full">
                      <div className="flex items-center gap-4">
                        <Avatar>
                          <AvatarImage src="https://github.com/shadcn.png" />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col justify-center">
                          <p className="text-lg font-semibold">Jane Doe</p>
                          <p className="text-sm text-[#71717A]">janedoe@amlic.com</p>
                        </div>
                      </div>
                      <div className="flex items-center flex-wrap">
                        <Checkbox />
                      </div>
                    </div>
                    <div className="flex flex-wrap justify-between items-center w-full">
                      <div className="flex items-center gap-4">
                        <Avatar>
                          <AvatarImage src="https://github.com/shadcn.png" />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col justify-center">
                          <p className="text-lg font-semibold">Jane Doe</p>
                          <p className="text-sm text-[#71717A]">janedoe@amlic.com</p>
                        </div>
                      </div>
                      <div className="flex items-center flex-wrap">
                        <Checkbox />
                      </div>
                    </div>
                  </div>
                  <div className="flex w-full justify-end gap-4">
                    <SecondaryButton label="Cancel" />
                    <PrimaryButton label="Done" />
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
        <div className="flex flex-wrap w-full border rounded-lg my-4">
          <div className="flex justify-between w-full p-4 text-[#0E0E2C] bg-[#F5F6FA] rounded-t-lg font-semibold">
            <h3>Role</h3>
            <h3>User</h3>
          </div>
          <div className="flex justify-between w-full p-4 text-[#0E0E2C] text-sm border-b">
            <div className="flex items-center gap-4">
              <div className="rounded-full h-4 w-4 bg-red-600"></div>
              <p className="font-medium">User Management</p>
            </div>
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
          <div className="flex justify-between w-full p-4 text-[#0E0E2C] text-sm border-b">
            <div className="flex items-center gap-4">
              <div className="rounded-full h-4 w-4 bg-green-600"></div>
              <p className="font-medium">Attendance System</p>
            </div>
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
        </div>
      </div>
    </div>
  );
};

import { Users, columns } from "@/components/table/columns";
import { DataTable } from "@/components/table/data-table";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { MdAddCircleOutline, MdHome, MdOutlineFilterList, MdSearch } from "react-icons/md";

async function getData(): Promise<Users[]> {
  return [
    {
      id: "728ed52f",
      username: "Jane Doe",
      groupAccess: "Admin",
      position: "CEO",
      dateAdded: "july 19, 2024",
      email: "janedoe@amlic.com",
    },
    {
      id: "728ed52f",
      username: "Jane Doe",
      groupAccess: "Admin",
      position: "CEO",
      dateAdded: "july 19, 2024",
      email: "janedoe@amlic.com",
    },
    {
      id: "728ed52f",
      username: "Jane Doe",
      groupAccess: "Admin",
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
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">
              <MdHome />
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/components">HRIS</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Employee</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="w-full py-[3.813rem]">
        <h1 className="text-[40px] font-semibold">Employee</h1>
        <p>Manage your team members and their account permissions here.</p>
        <div className="flex flex-wrap w-full justify-between items-center py-5">
          <div>
            <h2 className="text-[24px] font-semibold">
              All users <span>20</span>
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            <div className="flex content-center items-center border p-2">
              <MdSearch className="me-2" />
              <input type="text" className="border-0 outline-none w-[160px]" />
            </div>
            <Button>
              <MdOutlineFilterList />
              Filters
            </Button>
            <Button>
              <MdAddCircleOutline />
              Add user
            </Button>
          </div>
        </div>
        <div>
          <DataTable columns={columns} data={data} />
        </div>
      </div>
    </div>
  );
};

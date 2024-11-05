import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import { useEffect, useState } from "react";
import {
  MdAttachMoney,
  MdOutlineDashboardCustomize,
  MdOutlineLogout,
  MdOutlinePeople,
  MdOutlinePermDataSetting,
  MdOutlinePoll,
  MdOutlineSettings,
  MdOutlineSpaceDashboard,
  MdPendingActions,
} from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

const menu = [
  {
    title: "Dashboard",
    url: "/",
    icon: MdOutlineSpaceDashboard,
  },
];

const inventory = [
  {
    title: "Products",
    url: "/products",
    icon: MdOutlineDashboardCustomize,
  },
  {
    title: "Projects",
    url: "/projects",
    icon: MdOutlinePermDataSetting,
  },
  {
    title: "Stocks",
    url: "/stocks",
    icon: MdOutlinePoll,
  },
];

const hr = [
  {
    title: "Employee",
    url: "/employees",
    icon: MdOutlinePeople,
  },
  {
    title: "Payroll",
    url: "/payroll",
    icon: MdPendingActions,
  },
  {
    title: "Loan",
    url: "/loan",
    icon: MdAttachMoney,
  },
];

const settings = [
  {
    title: "Settings",
    url: "/settings",
    icon: MdOutlineSettings,
  },
  {
    title: "Logout",
    url: "/logout",
    icon: MdOutlineLogout,
  },
];

export function AppSidebar() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);
  return (
    <Sidebar collapsible="icon" className="bg-[#1E2530]">
      <div className="flex justify-center p-4">
        <img src="/images/AMLIC-Logo.png" className="w-[130px] h-[61]" />
      </div>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent className="mt-2 mb-5">
            <SidebarMenu>
              {menu.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link
                      to={item.url}
                      className={
                        activeLink === item.url ? "bg-sidebar-accent text-[#1E2530]" : "text-white"
                      }
                    >
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
          <SidebarSeparator className="mb-5" />
          <SidebarGroupLabel>Inventory</SidebarGroupLabel>
          <SidebarGroupContent className="mt-2 mb-5">
            <SidebarMenu>
              {inventory.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link
                      to={item.url}
                      className={
                        activeLink === item.url ? "bg-sidebar-accent text-[#1E2530]" : "text-white"
                      }
                    >
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
          <SidebarSeparator className="mb-5" />
          <SidebarGroupLabel>HRIS</SidebarGroupLabel>
          <SidebarGroupContent className="mt-2 mb-5">
            <SidebarMenu>
              {hr.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link
                      to={item.url}
                      className={
                        activeLink === item.url ? "bg-sidebar-accent text-[#1E2530]" : "text-white"
                      }
                    >
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
          <SidebarSeparator className="mb-5" />
          <SidebarGroupLabel>HRIS</SidebarGroupLabel>
          <SidebarGroupContent className="mt-2 mb-5">
            <SidebarMenu>
              {settings.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link
                      to={item.url}
                      className={
                        activeLink === item.url
                          ? "bg-sidebar-accent text-[#1E2530] font-medium"
                          : "text-white"
                      }
                    >
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <div className="flex p-4">
        <p className="text-white text-[14px] font-normal">Powered by Webworks</p>
      </div>
    </Sidebar>
  );
}

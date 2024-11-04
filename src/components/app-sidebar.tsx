import {
  Sidebar,
  SidebarContent,
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
  MdDashboard,
  MdGroup,
  MdGroupAdd,
  MdInventory,
  MdList,
  MdLogout,
  MdPayment,
  MdSettings,
} from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

const items = [
  {
    title: "Dashboard",
    url: "/",
    icon: MdDashboard,
  },
  {
    title: "Inventory",
    url: "/inventory",
    icon: MdInventory,
  },
  {
    title: "Employee",
    url: "/employees",
    icon: MdGroup,
  },
  {
    title: "Recruitment",
    url: "/recruitment",
    icon: MdGroupAdd,
  },
  {
    title: "Payroll",
    url: "/payroll",
    icon: MdPayment,
  },
  {
    title: "Loan",
    url: "/loan",
    icon: MdList,
  },
];

export function AppSidebar() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);
  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent className="mt-2 mb-5">
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link
                      to={item.url}
                      className={
                        activeLink === item.url
                          ? "bg-sidebar-accent text-sidebar-accent-foreground border-sidebar-accent-foreground"
                          : ""
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
          <SidebarGroupLabel>Settings</SidebarGroupLabel>
          <SidebarGroupContent className="my-2">
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link
                    to={"/settings"}
                    className={
                      activeLink === "/settings"
                        ? "bg-sidebar-accent text-sidebar-accent-foreground border-sidebar-accent-foreground"
                        : ""
                    }
                  >
                    <MdSettings />
                    <span>Settings</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link to={"/"}>
                    <MdLogout />
                    <span>Logout</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

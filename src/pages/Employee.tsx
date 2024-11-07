import { useState } from "react";
import { RoleManagement } from "./sections/RoleManagement";
import { UserManagement } from "./sections/UserManagement";

export const Employee = () => {
  const [activeTab, setActiveTab] = useState<string>("users");

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex flex-wrap w-full p-[1.875rem]">
      {activeTab === "users" ? (
        <UserManagement activeTab={activeTab} onTabChange={handleTabChange} />
      ) : (
        <RoleManagement activeTab={activeTab} onTabChange={handleTabChange} />
      )}
    </div>
  );
};

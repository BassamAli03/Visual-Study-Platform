import React, { useState, useEffect } from "react";
import { MySidebar } from "./Mainpageasidecomp";
import { useNavigate } from "react-router-dom";
import { Sidebaritem } from "./Mainpageasidecomp";
import {
  LifeBuoy,
  UserCircle,
  LayoutDashboard,
  Settings,
  Plus,
  Edit,
} from "lucide-react";

export let MainSideBar = ({
  selectedGroupId,
  setEditingGroup,
  setEditingUser,
  selectedAdminId,
  refreshTrigger,
}) => {
  const userid = localStorage.getItem("userId");
  const navigate = useNavigate();
  const [activeItem, setActiveItem] = useState("DashBoard");

  useEffect(() => {
    setActiveItem("DashBoard");
  }, [refreshTrigger]);

  const handleItemClick = (text) => {
    setActiveItem(text);
    switch (text) {
      case "DashBoard":
        setEditingGroup(false);
        setEditingUser(false);
        navigate("/MainPage");
        break;
      case "Create Group":
        setEditingGroup(false);
        setEditingUser(false);
        navigate("/createGroup");
        break;
      case "Join Group":
        setEditingGroup(false);
        setEditingUser(false);
        navigate("/createGroup");
        break;
      case "Edit Group":
        if (selectedGroupId && selectedAdminId === userid) {
          setEditingGroup(true);
          setEditingUser(false);
        } else {
          alert("No group selected!");
        }
        break;
      case "User Settings":
        setEditingGroup(false);
        setEditingUser(true);
        break;
      case "Help":
        setEditingGroup(false);
        setEditingUser(false);
        break;
      default:
        setEditingGroup(false);
        setEditingUser(false);
        break;
    }
  };

  return (
    <main className="side">
      <MySidebar>
        <Sidebaritem
          icon={<LayoutDashboard size={20} />}
          text="DashBoard"
          active={activeItem === "DashBoard"}
          func={() => handleItemClick("DashBoard")}
        />
        <Sidebaritem
          icon={<Plus size={20} />}
          text="Create Group"
          active={activeItem === "Create Group"}
          func={() => handleItemClick("Create Group")}
        />
        <Sidebaritem
          icon={<UserCircle size={20} />}
          text="Join Group"
          active={activeItem === "Join Group"}
          func={() => handleItemClick("Join Group")}
        />
        <Sidebaritem
          icon={<Edit size={20} />}
          text="Edit Group"
          active={activeItem === "Edit Group"}
          func={() => handleItemClick("Edit Group")}
        />
        <hr className="my-3" />
        <Sidebaritem
          icon={<Settings size={20} />}
          text="User Settings"
          active={activeItem === "User Settings"}
          func={() => handleItemClick("User Settings")}
        />
        <Sidebaritem
          icon={<LifeBuoy size={20} />}
          text="Help"
          active={activeItem === "Help"}
          func={() => handleItemClick("Help")}
        />
      </MySidebar>
    </main>
  );
};

import React, { useEffect, useState } from "react";
import { MyNavBar } from "./MainpageNavBar";
import { useNavigate } from "react-router-dom";
import Particlebg from "./Particlebg";
import { MainSideBar } from "./Mainpageaside";
import VerticalStaticBar from "./Mainrightbar";
import GroupPosts from "./Posts.jsx";
import { PostDiv } from "./Mainpagepostbox";
import { GroupDiv } from "./Mainpagegroupbox";
import { MainPageFooter } from "./Mainpagefooter";
import EditGroup from "../EditGroups/EditGroup.jsx";
import EditUser from "../EditUser/EditUser.jsx";

export let MainPage = () => {
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem("token");
  const profilepic = localStorage.getItem("profilepic");

  const [refreshTrigger, setRefreshTrigger] = useState(false);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/SignUp");
    }
  }, [isAuthenticated, navigate]);

  const [selectedGroup, setSelectedGroup] = useState(null);
  const [selectedAdminId, setSelectedAdminID] = useState(null);
  const [editingGroup, setEditingGroup] = useState(false);
  const [editingUser, setEditingUser] = useState(false);
  const [feedToggle, setFeed] = useState(null);

  const handleGroupSelection = (groupId, adminId) => {
    setSelectedGroup(groupId);
    setSelectedAdminID(adminId);
    setEditingGroup(false);
    setEditingUser(false);
  };

  const handleRefresh = () => {
    setRefreshTrigger((prev) => !prev);
    setEditingGroup(false);
    setEditingUser(false);
  };

  return (
    <div className="main-feed">
      <Particlebg />
      <MainSideBar
        selectedGroupId={selectedGroup}
        setEditingGroup={setEditingGroup}
        setEditingUser={setEditingUser}
        selectedAdminId={selectedAdminId}
        refreshTrigger={refreshTrigger}
      />
      <VerticalStaticBar
        onGroupClick={handleGroupSelection}
        refreshTrigger={refreshTrigger}
      />
      <MyNavBar />
      {editingGroup ? (
        <EditGroup
          groupId={selectedGroup}
          adminId={selectedAdminId}
          onRefresh={handleRefresh}
        />
      ) : editingUser ? (
        <EditUser onRefresh={handleRefresh} />
      ) : (
        <div className="container">
          <div className="row">
            <div className="col-sm"></div>
            <div className="col-sm">
              <PostDiv groupId={selectedGroup} profilepic={profilepic} />
            </div>
            <div className="col-sm">{/* <GroupDiv /> */}</div>
          </div>
          <div className="row">
            <div className="col-sm"></div>
            <div className="mt-5 col-sm">
              {selectedGroup && <GroupPosts groupId={selectedGroup} />}
            </div>
            <div className="col-sm"></div>
          </div>
        </div>
      )}
    </div>
  );
};

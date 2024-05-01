
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

export let MainPage = () => {
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem("token");

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/SignUp");
    }
  }, [isAuthenticated, navigate]);

  const [selectedGroup, setSelectedGroup] = useState(null);
  const [feedToggle, setFeed] = useState(null);

  return (
    <div className="main-feed">
      <Particlebg />
      <MainSideBar />
      <VerticalStaticBar onGroupClick={(groupId) => setSelectedGroup(groupId)} feedToggle={(feed)=>setFeed(feed)}/>
      <MyNavBar />
      <div className="container">
        <div className="row">
          <div className="col-sm"></div>
          <div className="col-sm">
            {/* Pass selectedGroup to PostDiv */}
            <PostDiv groupId={selectedGroup} />
          </div>
          <div className="col-sm">
            <GroupDiv />
          </div>
        </div>
        <div className="row">
          <div className="col-sm"></div>
          <div className="col-sm">
            {selectedGroup && <GroupPosts groupId={selectedGroup} />}
          </div>
          <div className="col-sm"></div>
        </div>
        <div className="row">
          {/* <MainPageFooter/> */}
        </div>
      </div>
    </div>
  );
};

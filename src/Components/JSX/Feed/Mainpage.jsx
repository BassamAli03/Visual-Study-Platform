import React from "react";
import { MyNavBar } from "./MainpageNavBar";
import Particlebg from "./Particlebg";
import { MainSideBar } from "./Mainpageaside";
import VerticalStaticBar from "./Mainrightbar";
import { PostDiv } from "./Mainpagepostbox";
import { GroupDiv } from "./Mainpagegroupbox";
import { MainPageFooter } from "./Mainpagefooter";
export let MainPage = () => {
  return (
    <div className="main-feed">
      <Particlebg />
      <MainSideBar />
      <VerticalStaticBar />
      <MyNavBar />
      <div className="container">
        <div className="row">
          <div className="col-sm"></div>
          <div className="col-sm">
            <PostDiv />
          </div>
          <div className="col-sm">
            <GroupDiv />
          </div>
        </div>
        <div className="row">
          <div className="col-sm"></div>
          <div className="col-sm">{/* POSTS WILL COME HERE */}
          
          </div>
          <div className="col-sm"></div>
        </div>
        <div className="row">
          <MainPageFooter/>
        </div>
      </div>
    </div>
  );
};

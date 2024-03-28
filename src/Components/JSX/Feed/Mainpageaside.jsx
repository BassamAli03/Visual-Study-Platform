import React from "react";
import { MySidebar } from "./Mainpageasidecomp";
import { Sidebaritem } from "./Mainpageasidecomp";
import { LifeBuoy,UserCircle,LayoutDashboard,Settings,Plus, } from "lucide-react";

export let MainSideBar = ( ) =>{

    return (
        <main className="side">
            <MySidebar>
            <Sidebaritem icon={<LayoutDashboard size={20}/>} text="DashBoard" active={true}/>

            <Sidebaritem icon={<UserCircle size={20}/>} text="Join Group"/>
            <Sidebaritem icon={<Plus size={20}/>} text="Create Group"/>
            <hr className="my-3"/>
            <Sidebaritem icon={<Settings size={20}/>} text="Settings" />
            <Sidebaritem icon={<LifeBuoy size={20}/>} text="Help" />
            </MySidebar>
        </main>
    );

}

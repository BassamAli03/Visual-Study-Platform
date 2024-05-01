
import React, { useEffect, useState } from "react";
import "../../CSS/Feed/Mainpagerightbar.css";

const VerticalStaticBar = ({ onGroupClick, feedToggle  }) => {
  const [userGroups, setUserGroups] = useState([]);

  useEffect(() => {
    const fetchUserGroups = async () => {
      try {
        const response = await fetch("http://localhost:4000/fetch-groups", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId: localStorage.getItem("userId"),
          }),
        });
        const data = await response.json();
        setUserGroups(data.groups);
      } catch (error) {
        console.error("Error fetching user groups:", error);
      }
    };

    fetchUserGroups();
  }, []);

  return (
    <div id="mainrightbar" className="mt-20 position-fixed top-0 right-0 h-screen flex flex-col justify-center items-center bg-gray-200">
      <div className="container mb-32">
      <button onClick={() => onGroupClick("feed")}  className="w-14 h-14 rounded-full bg-blue-500 mb-2">
          Feed
        </button>
    
        {userGroups&&
          userGroups.map((group) => (
            <div
              key={group._id}
              className="w-14 h-14 rounded-full bg-blue-500 mb-2"
              onClick={() => onGroupClick(group._id)}
            >
              {group.name}
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default VerticalStaticBar;

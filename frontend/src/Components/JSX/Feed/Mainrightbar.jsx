import React, { useEffect, useState } from "react";
import "../../CSS/Feed/Mainpagerightbar.css";

const VerticalStaticBar = ({ onGroupClick, feedToggle, refreshTrigger }) => {
  const [userGroups, setUserGroups] = useState([]);
  const [selectedGroupId, setSelectedGroupId] = useState(null); // No selection by default

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
  }, [refreshTrigger]);

  const handleGroupSelection = (groupId, adminId) => {
    setSelectedGroupId(groupId);
    onGroupClick(groupId, adminId);
  };

  return (
    <div
      id="mainrightbar"
      className="mt-20 position-fixed top-0 right-0 h-screen flex flex-col justify-center items-center bg-gray-200"
    >
      <div className="flex flex-col container mb-32">
        <button
          onClick={() => handleGroupSelection("feed", null)}
          className={`w-14 h-14 rounded-full bg-blue-500 mb-2 ${
            selectedGroupId === "feed" ? "ring-4 ring-blue-300" : ""
          }`}
        >
          Feed
        </button>

        {userGroups.map((group) => (
          <button
            key={group._id}
            className={`w-14 h-14 rounded-full bg-blue-500 mb-2 ${
              selectedGroupId === group._id ? "ring-4 ring-blue-300" : ""
            }`}
            onClick={() => handleGroupSelection(group._id, group.adminId)}
          >
            <img
              src={`http://localhost:4000/${group.groupprofilepic}`}
              alt={`${group.name}'s profile`}
              className="profile-pic w-full h-full rounded-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default VerticalStaticBar;

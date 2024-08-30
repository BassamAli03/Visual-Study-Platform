import React, { useState } from "react";
import "../../CSS/Feed/Mainpagegroupbox.css";

export let GroupDiv = () => {
  const [groupInfo, setGroupInfo] = useState({
    groupName: "My Group",
    messages: 9,
    notifications: 2,
    likes: 884,
    newLikesThisWeek: 35,
  });

  const avatarUrls = [
    "avatar-url-1",
    "avatar-url-2",
    "avatar-url-3",
    // ... add more avatar URLs
  ];

  return (
    <div id="groupdiv" className="mt-24 shadow-sm h-fit w-72">
      <h5 className="p-1 ms-3 underline mb-3" style={{ color: "#c1d7de" }}>
        Your Group
      </h5>

      <div className="flex">
        <div className="w-12 h-12 rounded-full bg-blue-500 ms-2 mt-2">
          <img src="" alt="" className="profile-pic" />
        </div>
        <div className="ms-2 flex-block">
          <h5 style={{ color: "#c1d7de" }}>{groupInfo.groupName}</h5>
          <p style={{ color: "#c1d7de" }}>📩 Messages {groupInfo.messages}</p>
          <p style={{ color: "#c1d7de" }}>
            🔔 Notifications {groupInfo.notifications}
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <button
          id="likesbtn"
          className="bg-primary rounded w-14 font-bold border"
        >
          Likes
        </button>
        <button
          id="viewsbtn"
          className="bg-primary rounded w-14 font-bold border"
        >
          Views
        </button>
      </div>

      <div className="mt-3 flex-block justify-center">
        <p className="ms-28" style={{ color: "#c1d7de" }}>
          💚 {groupInfo.likes}
        </p>
        <p className="ms-14" style={{ color: "#c1d7de" }}>
          {groupInfo.newLikesThisWeek} New Likes This Week
        </p>
      </div>
      <div className="flex justify-center">
        {avatarUrls.map((url, index) => (
          <div className="w-10 h-10 rounded-full bg-blue-500 mb-3">
            <img key="" src="" alt="" />
          </div>
        ))}
      </div>
      {/* Add avatars of people who liked the group */}
      {/* Map through an array of avatar URLs and render img elements */}
    </div>
  );
};

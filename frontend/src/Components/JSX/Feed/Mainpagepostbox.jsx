import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMicrophone,
  faVideo,
  faImage,
} from "@fortawesome/free-solid-svg-icons";
import "../../CSS/Feed/Mainpagepostbox.css";

export let PostDiv = (props) => {
  const [formData, setFormData] = useState({
    content: "",
  });

  const handleDataChange = (e) => {
    if(props.groupId =="feed"){
      alert("Select Group to post in")
    }else
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(props.groupId =="feed"){
      alert("Select Group to post in")
    }else{
      
    const formDataToSend = new FormData();
    formDataToSend.append("content", formData.content);
    formDataToSend.append("groupId", props.groupId);
    formDataToSend.append("image", imageInputRef.current.files[0]);
    formDataToSend.append("video", videoInputRef.current.files[0]);
    setFormData("");

    try {
      const response = await fetch("http://localhost:4000/create-post", {
        method: "POST",
        body: formDataToSend,
      });
      if (response.ok) {
        e.target.reset();
      }
    } catch (error) {
      console.error("Error creating post:", error);
    }
    
  }
  };

  const microphoneInputRef = useRef(null);
  const videoInputRef = useRef(null);
  const imageInputRef = useRef(null);

  const handleIconClick = (inputRef) => {
    inputRef.current.click();
  };

  return (
    <div id="postbox" className="mt-24 shadow-sm w-full">
      <div className="flex items-center px-4 py-3">
        <div className="w-12 h-12 rounded-full bg-blue-500 flex-shrink-0">
          <img src="" alt="" className="profile-pic" />
        </div>
        <form className="ml-4 flex flex-col flex-grow" onSubmit={handleSubmit}>
          <input
            name="content"
            type="text"
            placeholder="Write something..."
            className="h-12 px-4 py-2 bg-gray-200 rounded-md outline-none focus:ring focus:ring-blue-500"
            value={formData.content}
            onChange={handleDataChange} required
          />
          <div className="mt-2 flex space-x-2">
            <input
              type="file"
              className="hidden"
              ref={imageInputRef}
              accept="image/*"
            />
            <FontAwesomeIcon
              icon={faImage}
              className="text-gray-900 cursor-pointer hover:text-gray-700"
              onClick={() => handleIconClick(imageInputRef)}
            />
            <input
              type="file"
              className="hidden"
              ref={videoInputRef}
              accept="video/*"
            />
            <FontAwesomeIcon
              icon={faVideo}
              className="text-gray-900 cursor-pointer hover:text-gray-700"
              onClick={() => handleIconClick(videoInputRef)}
            />
            
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-black rounded-md hover:bg-blue-600 font-semibold"
            >
              Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

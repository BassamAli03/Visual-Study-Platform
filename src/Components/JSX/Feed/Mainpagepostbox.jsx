import React, {useRef} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMicrophone,
    faVideo,
    faImage,
  } from "@fortawesome/free-solid-svg-icons";



  export let PostDiv = () => {

    const microphoneInputRef = useRef(null);
    const videoInputRef = useRef(null);
    const imageInputRef = useRef(null);
  
    const handleIconClick = (inputRef) => {
      inputRef.current.click();
    };

  return (
    <div id="postbox" className="mt-24 shadow-sm h-36 w-100" style={{ backgroundColor: "#6187bc8f" }}>
      <div className="flex">
      <div className="w-12 h-12 rounded-full bg-blue-500 ms-2 mt-2">
      <img
        src=""
        alt=""
        className="profile-pic"
      />
      </div>
      <textarea
        placeholder="Write something..."
        className="mt-3 ms-3 w-80 h-20" style={{ backgroundColor: "#6187bc8f", resize: "none" }}
      ></textarea>
      </div>

      <div className="mt-2 flex justify-end gap-3 items-center">
      <FontAwesomeIcon
        icon={faMicrophone}
        className="action-icon"
        onClick={() => handleIconClick(microphoneInputRef)}
      />
      <input
        type="file"
        className="hidden"
        ref={microphoneInputRef}
        accept="audio/*"
        onChange={(e) => console.log("Microphone file selected:", e.target.files[0])}
      />
        <FontAwesomeIcon
        icon={faVideo}
        className="action-icon"
        onClick={() => handleIconClick(videoInputRef)}
      />
      <input
        type="file"
        className="hidden"
        ref={videoInputRef}
        accept="video/*"
        onChange={(e) => console.log("Video file selected:", e.target.files[0])}
      />
        <FontAwesomeIcon
        icon={faImage}
        className="action-icon"
        onClick={() => handleIconClick(imageInputRef)}
      />
      <input
        type="file"
        className="hidden"
        ref={imageInputRef}
        accept="image/*"
        onChange={(e) => console.log("Image file selected:", e.target.files[0])}
      />
        <button className="post-button bg-primary rounded me-4 w-14 font-bold">
          Post
        </button>
      </div>
    </div>
  );
  };

import React, { useState, useRef } from "react";
import { CardBody, CardContainer } from "./threedimcard";
import { Input } from "./cardinput";
import { Label } from "./cardlabel";
import { cn } from "../../utils/cn";
import { useNavigate } from "react-router-dom";

export let ThreeCard = () => {
  const navigate = useNavigate();
  const [groupName, setGroupName] = useState("");
  const [groupDesc, setGroupDesc] = useState("");
  const [groupPrivacy, setGroupPrivacy] = useState("private");
  const [memberLimit, setMemberLimit] = useState(0);
  const [createData, setcreateData] = useState({
    groupprofilepic: null,
  });
  const handlecreateChange = (e) => {
    setcreateData({ ...createData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userId = localStorage.getItem("userId");
    const formData = new FormData();
    formData.append("name", groupName);
    formData.append("description", groupDesc);
    formData.append("privacy", groupPrivacy);
    formData.append("memberLimit", memberLimit);
    formData.append("adminId", userId);
    if (createData.groupprofilepic) {
      formData.append("groupprofilepic", createData.groupprofilepic);
    }
    try {
      const response = await fetch("http://localhost:4000/create-group", {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        const data = await response.json();
        setcreateData({
          groupprofilepic: null,
        });
        navigate("/Mainpage", { replace: true });
      } else {
        const errorData = await response.json();
        console.error("Failed to create group", errorData.message);
        alert("Failed to create group. " + errorData.message);
      }
    } catch (error) {
      console.error("Error creating group:", error);
    }
  };

  const handlePrivacyChange = (e) => {
    setGroupPrivacy(e.target.value);
  };

  return (
    <CardContainer className="ms-36 inter-var group">
      <CardBody className="bg-black relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border group">
        <div className="max-w-md w-96">
          <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
            Welcome to Visual Study Groups
          </h2>
          <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
            Create a group for people to join.
          </p>

          <form className="my-2" onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
              <LabelInputContainer>
                <Label htmlFor="groupname">Group name</Label>
                <Input
                  id="groupname"
                  placeholder="Software Engineering"
                  type="text"
                  value={groupName}
                  onChange={(e) => setGroupName(e.target.value)}
                />
              </LabelInputContainer>
            </div>
            <LabelInputContainer>
              <Label htmlFor="groupdesc">Group Description</Label>
              <Input
                id="groupdesc"
                placeholder="Add Description"
                type="text"
                value={groupDesc}
                onChange={(e) => setGroupDesc(e.target.value)}
                style={{ resize: "none", height: "60px" }}
              />
            </LabelInputContainer>
            <div className="mt-3">
              <Label htmlFor="grouppriv">Group Privacy</Label>
            </div>
            <div className="flex flex-row mt-3 mb-3">
              <input
                type="radio"
                value="private"
                checked={groupPrivacy === "private"}
                onChange={handlePrivacyChange}
                style={{ width: "30px", height: "30px" }}
              />
              <label className="text-white ms-2">Private</label>
              <input
                type="radio"
                value="public"
                checked={groupPrivacy === "public"}
                onChange={handlePrivacyChange}
                style={{ width: "30px", height: "30px", marginLeft: "40px" }}
              />
              <label className="text-white ms-2">Public</label>
            </div>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="memlimit">Member Limit</Label>
              <Input
                id="memlimit"
                placeholder="0-20"
                type="number"
                min="0"
                max="20"
                value={memberLimit}
                onChange={(e) => setMemberLimit(e.target.value)}
              />
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="groupprofilepic">Group Picture</Label>
              <Input
                type="file"
                name="groupprofilepic"
                onChange={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  const file = e.target.files[0];
                  if (file) {
                    setcreateData({
                      ...createData,
                      groupprofilepic: file,
                    });
                  }
                }}
                accept="image/*"
                required
              />
            </LabelInputContainer>
            <button
              className="bg-gradient-to-br from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-input group-hover:opacity-100"
              type="submit"
            >
              Create Group
            </button>
            <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-3 h-[1px] w-full" />
          </form>
          <button
            type="button"
            className="bg-gradient-to-br from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-input group-hover:opacity-100"
            onClick={() => navigate("/Mainpage")}
          >
            Back to DashBoard
          </button>
        </div>
      </CardBody>
    </CardContainer>
  );
};

const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

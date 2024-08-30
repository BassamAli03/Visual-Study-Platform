import React, { useState, useEffect } from "react";
import { CardBody, CardContainer } from "./threedimcard";
import { Input } from "./cardinput";
import { Label } from "./cardlabel";
import { cn } from "../../utils/cn";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { color } from "framer-motion";

export let ThreeCardJoin = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [allPublicGroups, setAllPublicGroups] = useState([]);

  useEffect(() => {
    // Fetch all public groups initially
    const fetchPublicGroups = async () => {
      const userId = localStorage.getItem("userId");
      try {
        const response = await axios.get(
          `http://localhost:4000/search-groups?privacy=public&userId=${userId}`
        );
        setAllPublicGroups(response.data.groups);
        setSearchResults(response.data.groups);
      } catch (error) {
        console.error("Error fetching public groups:", error);
      }
    };

    fetchPublicGroups();
  }, []);

  const handleSearchInputChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (query === "") {
      setSearchResults(allPublicGroups);
    } else {
      const filteredGroups = allPublicGroups.filter((group) =>
        group.name.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(filteredGroups);
    }
  };

  const handleJoinGroup = async (groupId) => {
    console.log(groupId);
    try {
      const userId = localStorage.getItem("userId");
      const response = await fetch("http://localhost:4000/join-group", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          groupId: groupId,
          userId: userId,
        }),
      });
      if (response.ok) {
        alert("Group joined successfully");
        navigate("/Mainpage");
      } else {
        console.error("Failed to join group");
        alert("Failed to join group. Please try again later.");
      }
    } catch (error) {
      console.error("Error joining group:", error);
    }
  };

  return (
    <CardContainer className="me-40 inter-var group">
      <CardBody className="bg-black relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border group">
        <div className="max-w-md w-96 mx-auto">
          <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
            Welcome to Visual Study Groups
          </h2>
          <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
            Search a group to join.
          </p>

          <form className="my-8">
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
              <LabelInputContainer>
                <Label htmlFor="searchgroup">Search Group</Label>
                <Input
                  id="searchgroup"
                  placeholder="Software Engineering"
                  type="text"
                  value={searchQuery}
                  onChange={handleSearchInputChange}
                />
              </LabelInputContainer>
            </div>
          </form>

          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <Label htmlFor="grouplist">List</Label>
            <div className="mt-4">
              {searchResults.length === 0 ? (
                <p className="text-white">
                  No groups found.{" "}
                  <span className="text-blue-500 cursor-pointer">
                    Create a group
                  </span>
                </p>
              ) : (
                searchResults.map((group) => (
                  <div key={group._id}>
                    <li key={group._id} className="text-white">
                      {group.name}{" "}
                      <button
                        onClick={() => handleJoinGroup(group._id)}
                        className="ml-2 bg-blue-900 hover:bg-blue-600 px-3 py-1 rounded-md text-white"
                      >
                        Join
                      </button>
                    </li>
                  </div>
                ))
              )}
            </div>
          </div>

          <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

          <button
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

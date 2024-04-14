import React from "react";
import { CardBody, CardContainer } from "./threedimcard";
import { Input } from "./cardinput";
import { Label } from "./cardlabel";
import { cn } from "../../utils/cn";
import { useNavigate } from "react-router-dom";


const ThreeCardJoin = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <CardContainer className="inter-var group">
      <CardBody className=" bg-black relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border group">
        <div className="w-100 max-w-md w-full mx-auto">
          <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
            Welcome to Visual Study Groups
          </h2>
          <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
            Search a group to join.
          </p>

          <form className="my-8" onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
              <LabelInputContainer>
                <Label htmlFor="searchgroup">Search Group</Label>
                <Input
                  id="searchgroup"
                  placeholder="Software Engineering"
                  type="text"
                />
              </LabelInputContainer>
            </div>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
              <Label htmlFor="grouplist">List</Label>
              <div>
                {/* SEARCHED FIELDS WILL BE SHOWN HERE */}
              </div>
            </div>

            <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
          </form>
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

export default ThreeCardJoin;

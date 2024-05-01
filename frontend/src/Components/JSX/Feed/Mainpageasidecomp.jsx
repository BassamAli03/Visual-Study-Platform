import React, { Children, createContext, useContext, useState } from "react";
import { ChevronLeft, ChevronRight, MoreVertical } from "lucide-react";
import "../../CSS/Feed/Mainpageasidecomp.css";

const SidebarContext = createContext();
export let MySidebar = ({ children }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <aside className="h-screen position-fixed mt-20">
      <nav
        id="asidecompnav"
        className="h-full flex flex-col border-r shadow-sm"
      >
        <div className="p-3 pb-3 flex justify-between items-center">
          <img
            src="https://img.logoipsum.com/243.svg"
            className={`overflow-hidden transition-all ${
              expanded ? "w-32" : "w-0"
            }`}
            alt=""
          />
          <button
            id="asidecompbtn"
            onClick={() => setExpanded((curr) => !curr)}
            className="p-1.5 rounded-lg border-1"
          >
            {expanded ? <ChevronLeft /> : <ChevronRight />}
          </button>
        </div>

        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3">{children}</ul>
        </SidebarContext.Provider>

        <div className="border-t flex p-3 mb-20">
          <img
            src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
            alt=""
            className="w-10 h-10 rounded-md"
          />
          <div
            className={`flex justify-between items-center overflow-hidden transition-all ${
              expanded ? "w-52 ml-3" : "w-0"
            }`}
          >
            <div className="leading-4">
              <h4 className="font-semibold text-white">Bassam</h4>
              <span className="ms-1 text-xs text-white">bassam@gmail.com</span>
            </div>
            <MoreVertical size={20} />
          </div>
        </div>
      </nav>
    </aside>
  );
};

export let Sidebaritem = ({ icon, text, active, alert ,func}) => {
  const { expanded } = useContext(SidebarContext);
  return (
    <li onClick={func}
      className={`relative flex items-center py-2 px-3 my-1 
                    font-medium rounded-md cursor-pointer transition-colors group 
                    ${
                      active
                        ? "bg-gradient-to-r from-indio-200 to-indigo-100 text-black"
                        : "hover:bg-indigo-50 text-white"
                    }
                  `}
    >
      {icon}
      <span
        className={`overflow-hidden transition-all ${
          expanded ? "w-52 ml-3" : "w-0"
        }`}
      >
        {text}
      </span>
      {alert && (
        <div
          className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${
            expanded ? "" : "top-2"
          }`}
        />
      )}

      {!expanded && (
        <div
          className={`
      absolute left-full rounded-md px-2 py-1 ml-6
      bg-gray-500 text-indigo-800 text-sm
      invisible opacity-20 -translate-x-3 transition-all
      group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
  `}
        >
          {text}
        </div>
      )}
    </li>
  );
};

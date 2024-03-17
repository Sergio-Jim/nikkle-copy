import { Outlet } from "react-router-dom";
import Sidebar from "../common/Sidebar";
import Topbar from "../common/Topbar";

const MainLayout = () => {
  return (
    <>
      <div className="flex-col h-lvh">
        <div className="flex h-[15%]">
          <Topbar />
        </div>
        <div className="flex h-[85%]">
          <div className="flex w-64 bg-red-800">
            <Sidebar />
          </div>
          <div className="flex flex-grow bg-blue-800">
            <Outlet />
          </div>
        </div>
      </div>
    </>
    
  );
};

export default MainLayout;
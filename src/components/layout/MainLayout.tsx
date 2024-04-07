import { Outlet } from "react-router-dom";
import Sidebar from "../common/Sidebar";
import Topbar from "../common/Topbar";

const MainLayout = () => {
  return (
    <>
      <div className="flex flex-col h-screen">
        <div className="top-0 w-full z-10">
          <Topbar />
        </div>
        <div className="flex flex-grow">
          <div className="flex flex-shrink-0 w-64">
            <Sidebar />
          </div>
          <div className="flex flex-col flex-grow overflow-y-auto m-6">
            <Outlet />
          </div>
        </div>
      </div>
    </>
    
  );
};

export default MainLayout;
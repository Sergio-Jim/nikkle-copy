import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { RouteType } from "../../routes/config";
import SidebarItem from "./SidebarItem";
import navArrow from "../../assets/images/navigation-arrow.png";
import navArrowActive from "../../assets/images/navigation-arrow-active.png";

type Props = {
  item: RouteType;
};

const SidebarItemCollapse = ({ item }: Props) => {
  const [open, setOpen] = useState(false);

  const { appState } = useSelector((state: RootState) => state.appState);

  useEffect(() => {
    if (appState.includes(item.state)) {
      setOpen(true);
    }
  }, [appState, item]);

  return item.sidebarProps ? (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center w-full hover:bg-gray-200 py-3 px-6" // Tailwind button styles
      >
        <div className="flex items-center w-[90%] justify-between">
          <div className="flex items-center">
            <div className="text-gray-600 mr-3">
              {" "}
              {/* Tailwind text color */}
              {item.sidebarProps.icon && item.sidebarProps.icon}
            </div>
            <div>
              <p className="text-sm">{item.sidebarProps.displayText}</p>{" "}
              {/* Tailwind text size */}
            </div>
          </div>
          <div className="">
            {open ? (
              <img src={navArrowActive} alt="navArrowActive" />
            ) : (
              <img src={navArrow} alt="navArrow" />
            )}
          </div>
        </div>
      </button>
      {open && (
        <ul className="ml-6">
          {item.child?.map((route, index) =>
            route.sidebarProps ? (
              route.child ? (
                <SidebarItemCollapse item={route} key={index} />
              ) : (
                <SidebarItem item={route} key={index} />
              )
            ) : null
          )}
        </ul>
      )}
    </>
  ) : null;
};

export default SidebarItemCollapse;

// import { ListItemButton, ListItemIcon } from "@mui/material";
// import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import colorConfigs from "../../configs/colorConfigs";
// import { RootState } from "../../redux/store";
// import { RouteType } from "../../routes/config";

// type Props = {
//   item: RouteType;
// };

// const SidebarItem = ({ item }: Props) => {
//   const { appState } = useSelector((state: RootState) => state.appState);

//   return (
//     item.sidebarProps && item.path ? (
//       <ListItemButton
//         component={Link}
//         to={item.path}
//         sx={{
//           "&: hover": {
//             backgroundColor: colorConfigs.sidebar.hoverBg
//           },
//           backgroundColor: appState === item.state ? colorConfigs.sidebar.activeBg : "unset",
//           paddingY: "12px",
//           paddingX: "24px"
//         }}
//       >
//         <ListItemIcon sx={{
//           color: colorConfigs.sidebar.color
//         }}>
//           {item.sidebarProps.icon && item.sidebarProps.icon}
//         </ListItemIcon>
//         {item.sidebarProps.displayText}
//       </ListItemButton>
//     ) : null
//   );
// };

// export default SidebarItem;

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../redux/store";
import { RouteType } from "../../routes/config";

type Props = {
  item: RouteType;
};

const SidebarItem = ({ item }: Props) => {
  const { appState } = useSelector((state: RootState) => state.appState);

  return item.sidebarProps && item.path ? (
    <Link
      to={item.path}
      className={`block py-3 px-6 ${
        appState === item.state
          ? "bg-blue-500 text-white"
          : "text-gray-900 bg-transparent"
      } hover:bg-blue-600`}
    >
      <div className="flex items-center">
        {item.sidebarProps.icon && (
          <div className="mr-3">{item.sidebarProps.icon}</div>
        )}
        <span
          className={appState === item.state ? "text-white" : "text-gray-900"}
        >
          {item.sidebarProps.displayText}
        </span>
      </div>
    </Link>
  ) : null;
};

export default SidebarItem;

// import { Collapse, List, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
// import { useEffect, useState } from "react";
// import colorConfigs from "../../configs/colorConfigs";
// import { RouteType } from "../../routes/config";
// import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';
// import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
// import SidebarItem from "./SidebarItem";
// import { useSelector } from "react-redux";
// import { RootState } from "../../redux/store";

// type Props = {
//   item: RouteType;
// };

// const SidebarItemCollapse = ({ item }: Props) => {
//   const [open, setOpen] = useState(false);

//   const { appState } = useSelector((state: RootState) => state.appState);

//   useEffect(() => {
//     if (appState.includes(item.state)) {
//       setOpen(true);
//     }
//   }, [appState, item]);

//   return (
//     item.sidebarProps ? (
//       <>
//         <ListItemButton
//           onClick={() => setOpen(!open)}
//           sx={{
//             "&: hover": {
//               backgroundColor: colorConfigs.sidebar.hoverBg
//             },
//             paddingY: "12px",
//             paddingX: "24px"
//           }}
//         >
//           <ListItemIcon sx={{
//             color: colorConfigs.sidebar.color
//           }}>
//             {item.sidebarProps.icon && item.sidebarProps.icon}
//           </ListItemIcon>
//           <ListItemText
//             disableTypography
//             primary={
//               <Typography>
//                 {item.sidebarProps.displayText}
//               </Typography>
//             }
//           />
//           {open ? <ExpandLessOutlinedIcon /> : <ExpandMoreOutlinedIcon />}
//         </ListItemButton>
//         <Collapse in={open} timeout="auto">
//           <List>
//             {item.child?.map((route, index) => (
//               route.sidebarProps ? (
//                 route.child ? (
//                   <SidebarItemCollapse item={route} key={index} />
//                 ) : (
//                   <SidebarItem item={route} key={index} />
//                 )
//               ) : null
//             ))}
//           </List>
//         </Collapse>
//       </>
//     ) : null
//   );
// };

// export default SidebarItemCollapse;

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { RouteType } from "../../routes/config";
import SidebarItem from "./SidebarItem";

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

  return (
    item.sidebarProps ? (
      <>
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center w-full hover:bg-gray-200 py-3 px-6" // Tailwind button styles
        >
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center">
              <div className="text-gray-600 mr-4"> {/* Tailwind text color */}
                {item.sidebarProps.icon && item.sidebarProps.icon}
              </div>
              <div>
                <p className="text-sm">{item.sidebarProps.displayText}</p> {/* Tailwind text size */}
              </div>
            </div>
            <div>
              {open ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3.75a.75.75 0 01.75.75V9h4.25a.75.75 0 110 1.5H10v4.25a.75.75 0 11-1.5 0V10H3.75a.75.75 0 110-1.5H9V4.5a.75.75 0 01.75-.75z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 16.25a.75.75 0 01-.75-.75V11H4.75a.75.75 0 010-1.5H10V4.75a.75.75 0 011.5 0V10h4.25a.75.75 0 010 1.5H11v4.25a.75.75 0 01-.75.75z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </div>
          </div>
        </button>
        {open && (
          <ul>
            {item.child?.map((route, index) => (
              route.sidebarProps ? (
                route.child ? (
                  <SidebarItemCollapse item={route} key={index} />
                ) : (
                  <SidebarItem item={route} key={index} />
                )
              ) : null
            ))}
          </ul>
        )}
      </>
    ) : null
  );
};

export default SidebarItemCollapse;

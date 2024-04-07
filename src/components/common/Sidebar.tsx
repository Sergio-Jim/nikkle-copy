// import { Avatar, Drawer, List, Stack, Toolbar } from "@mui/material";
// import assets from "../../assets";
// import colorConfigs from "../../configs/colorConfigs";
// import sizeConfigs from "../../configs/sizeConfigs";
// import appRoutes from "../../routes/appRoutes";
// import SidebarItem from "./SidebarItem";
// import SidebarItemCollapse from "./SidebarItemCollapse";

// const Sidebar = () => {
//   return (
//     <Drawer
//       variant="permanent"
//       sx={{
//         width: sizeConfigs.sidebar.width,
//         flexShrink: 0,
//         "& .MuiDrawer-paper": {
//           width: sizeConfigs.sidebar.width,
//           boxSizing: "border-box",
//           borderRight: "0px",
//           backgroundColor: colorConfigs.sidebar.bg,
//           color: colorConfigs.sidebar.color
//         }
//       }}
//     >
//       <List disablePadding>
//         <Toolbar sx={{ marginBottom: "20px" }}>
//           <Stack
//             sx={{ width: "100%" }}
//             direction="row"
//             justifyContent="center"
//           >
//             <Avatar src={assets.images.logo} />
//           </Stack>
//         </Toolbar>
//         {appRoutes.map((route, index) => (
//           route.sidebarProps ? (
//             route.child ? (
//               <SidebarItemCollapse item={route} key={index} />
//             ) : (
//               <SidebarItem item={route} key={index} />
//             )
//           ) : null
//         ))}
//       </List>
//     </Drawer>
//   );
// };

// export default Sidebar;

import appRoutes from "../../routes/appRoutes";
import SidebarItem from "./SidebarItem";
import SidebarItemCollapse from "./SidebarItemCollapse";

const Sidebar = () => {
  return (
    <div className="flex h-full text-black">
      <div className="w-[300px] flex-shrink-0 border-r border-transparent">
        <div className="p-4">
          <nav>
            <ul>
              {appRoutes.map(
                (route, index) =>
                  route.sidebarProps &&
                  (route.child ? (
                    <SidebarItemCollapse item={route} key={index} />
                  ) : (
                    <SidebarItem item={route} key={index} />
                  ))
              )}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

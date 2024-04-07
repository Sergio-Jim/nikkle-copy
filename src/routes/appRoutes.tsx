import DashboardPage from "../pages/dashboard/DashboardPage";
import SalesPageLayout from "../pages/sales/SalesPageLayout";
import { RouteType } from "./config";
import HomeIcon from "../assets/images/dashboard.svg";
import SalesIcon from "../assets/images/sales.svg";
import CustomersPage from "../pages/sales/customers/CustomersPage";
import AddCustomerPage from "../pages/sales/customers/AddCustomerPage";

const appRoutes: RouteType[] = [
  {
    index: true,
    element: <DashboardPage />,
    state: "dashboard",
  },
  {
    path: "/dashboard",
    element: <DashboardPage />,
    state: "dashboard",
    sidebarProps: {
      displayText: "Dashboard",
      icon: <img src={HomeIcon} alt="Dashboard" />,
    },
  },
  {
    path: "/sales",
    element: <SalesPageLayout />,
    state: "sales",
    sidebarProps: {
      displayText: "Sales",
      icon: <img src={SalesIcon} alt="Dashboard" />,
    },
    child: [
      {
        path: "/sales/customers",
        element: <CustomersPage />,
        state: "sales.customers",
        sidebarProps: {
          displayText: "Customers",
        },
      },
    ],
  },
  {
    path: "/sales",
    element: <SalesPageLayout />,
    state: "sales",
    sidebarProps: {
      displayText: "SomethingNew",
      icon: <img src={SalesIcon} alt="Dashboard" />,
    },
    child: [
      {
        path: "/sales/customers",
        element: <CustomersPage />,
        state: "sales.customers",
        sidebarProps: {
          displayText: "Customers",
        },
      },
      {
        path: "/sales/customers/addcustomer",
        element: <AddCustomerPage />,
        state: "sales.addcustomer",
      },
    ],
  },
];

export default appRoutes;

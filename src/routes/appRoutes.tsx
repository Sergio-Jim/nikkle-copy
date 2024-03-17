import DashboardPage from "../pages/dashboard/DashboardPage";
import SalesPageLayout from "../pages/sales/SalesPageLayout";
import { RouteType } from "./config";
import homeIcon from "../assets/images/dashboard-list-item.svg";
import salesIcon from "../assets/images/sales-list-item.svg";
import CustomersPage from "../pages/sales/CustomersPage";

const appRoutes: RouteType[] = [
    {
        index: true,
        element: <DashboardPage/>,
        state: "dashboard",
        sidebarProps: {
            displayText: "Sales",
            icon: homeIcon,
        }
    },
    {
        path: "/sales",
        element: <SalesPageLayout/>,
        state: "sales",
        sidebarProps: {
            displayText: "Sales",
            icon: salesIcon,
        },
        child: [
            {
                path: "/sales/customers",
                element: <CustomersPage/>,
                state: "sales.customers",
                sidebarProps: {
                    displayText: "Customers"
                }
            }
        ]
    }
];

export default appRoutes;
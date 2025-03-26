import { lazy } from "react";
import DashboardLayout from "../layouts/DashboardLayout";

const Dashboard = lazy(() => import("../pages/outlook/Dashboard"));
const Mail = lazy(() => import("../pages/outlook/Mail"));
const Settings = lazy(() => import("../pages/Settings"));
const ComposeMail = lazy(() => import("../pages/outlook/ComposeMail"));

const OutlookRoutes = {
  path: "/",
  element: <DashboardLayout />,
  children: [
    {
      path: "/",
      element: <Dashboard />,
    },
    {
      path: "/mail",
      element: <Mail />,
    },
    {
      path: "/settings",
      element: <Settings />,
    },
    {
      path: "/mail/compose",
      element: <ComposeMail />,
    },
  ],
};

export default OutlookRoutes;

import { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import OutlookRoutes from "./OutlookRoutes";
import Loading from "../components/Loading";

export default function ThemeRoutes() {
  return <Suspense fallback={<Loading />}>{useRoutes([OutlookRoutes])}</Suspense>;
}

import { DashboardPage } from "../components/DashboardPage/DashboardPage";
import { ExpensePage } from "../components/ExpensePage/ExpensePage";
import { LoginPage } from "../components/LoginPage/LoginPage";

const ROUTES = [
  { path: "/login", element: <LoginPage /> },
  { path: "/", element: <DashboardPage /> },
  { path: "/expense", element: <ExpensePage /> },
];

export default ROUTES;

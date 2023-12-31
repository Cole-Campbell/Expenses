import "./index.css";
import ROUTES from "./routes/Routes";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { UserProvider } from "./context/UserContext";
import { UserBanner } from "./components/UserBanner/UserBanner";

export default function App() {
  const queryClient = new QueryClient();
  const router = createBrowserRouter(ROUTES);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <UserProvider>
          <UserBanner />
          <RouterProvider router={router} />
        </UserProvider>
      </div>
    </QueryClientProvider>
  );
}

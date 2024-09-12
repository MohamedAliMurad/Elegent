import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProfileOverview from "./pages/ProfileOverview";
import Layout from "./pages/Layout"; // Ensure this includes Sidebar and Header

const App: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />, // Layout should include Sidebar and Header
      children: [
        { index: true, element: <ProfileOverview /> }, // Default route
        {
          path: "home",
          element: <ProfileOverview />,
          children: [
            { path: "dashboard", element: <ProfileOverview /> },
            { path: "analytics", element: <ProfileOverview /> },
            { path: "reports", element: <ProfileOverview /> },
          ],
        },
        {
          path: "pages",
          element: <ProfileOverview />,
          children: [
            {
              path: "profile", // Relative path
              element: <ProfileOverview />,
              children: [
                { path: "overview", element: <ProfileOverview /> },
                { path: "all-projects", element: <ProfileOverview /> },
              ],
            },
            { path: "users", element: <ProfileOverview /> },
            { path: "account", element: <ProfileOverview /> },
            { path: "projects", element: <ProfileOverview /> },
          ],
        },
        { path: "*", element: <ProfileOverview /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;

import React from "react";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import SignIn from "./components/Auth/SignIn/SignIn";
import ContactUs from "./components/Contact/ContactUs";
import Blogs from "./components/Blogs/Blogs";
import Footer from "./components/footer/Footer";
import Info_blog from "./components/Blogs/blog/Info-blog";
import NotFound from "./components/notFound/NotFound";
import Profile from "./components/profile/Profile";
import { ContextAuthProvider } from "./components/Auth/ConditionAuth";
import QuitSmoking from "./components/profile/quit_smoking/QuitSmoking";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Header />
          <Outlet />
          <Footer />
        </>
      ),
      children: [
        { path: "/", element: <Home /> },
        {
          path: "/sign-in",
          element: <SignIn />,
        },
        {
          path: "/contact-us",
          element: <ContactUs />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
        {
          path: "/quit-smoking",
          element: <QuitSmoking />,
        },
        {
          path: "/blogs",
          element: <Blogs />,
        },
        {
          path: "/blog/:blogId",
          element: <Info_blog />,
        },
      ],
    },
  ]);
  return (
    <ContextAuthProvider>
      <RouterProvider router={router} />
    </ContextAuthProvider>
  );
}

export default App;

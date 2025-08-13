import { Route } from "react-router-dom";
import { lazy } from "react";

// import AppLayout from "@/components/layouts/AppLayout.jsx";
// import RequireAuth from "@/components/auth/RequireAuth.jsx";
import NotFound from "@/pages/NotFound.jsx";

// Lazy pages
const Home = lazy(() => import("@/pages/Home.jsx"));
// const Product = lazy(() => import("@/pages/Product.jsx"));
// const Cart = lazy(() => import("@/pages/Cart.jsx"));
// const Profile = lazy(() => import("@/pages/Profile.jsx"));
const Login = lazy(() => import("@/pages/auth/Login.jsx"));

/**
 * JSX daraxt ko'rinishidagi marshrutlar.
 * App.jsx da <Routes>{routes}</Routes> tarzida ishlatiladi.
 */
export const routes = (
  <Route element={<Home />}>
    <Route index element={<Home />} />
    {/* <Route path="product/:id" element={<Product />} /> */}

    {/* Protected */}
    {/* <Route element={<RequireAuth />}> */}
      {/* <Route path="cart" element={<Cart />} /> */}
      {/* <Route path="profile" element={<Profile />} /> */}
    {/* </Route> */}

    <Route path="login" element={<Login />} />
    <Route path="*" element={<NotFound />} />
  </Route>
);

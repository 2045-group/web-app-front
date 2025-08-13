import { Route } from "react-router-dom";
import { lazy } from "react";

// Lazy import qilingan komponentlar
const Home = lazy(() => import("@/pages/Home.jsx"));
const Product = lazy(() => import("@/pages/products/Product.jsx"));
const Cart = lazy(() => import("@/pages/Cart.jsx"));
const Profile = lazy(() => import("@/pages/Profile.jsx"));
const Login = lazy(() => import("@/pages/auth/Login.jsx"));
const Register = lazy(() => import("@/pages/auth/Register.jsx"));
const NotFound = lazy(() => import("@/pages/NotFound.jsx"));

// Layout komponentlari
const AppLayout = lazy(() => import("@/components/layouts/AppLayout.jsx"));
const RequireAuth = lazy(() => import("@/components/auth/RequireAuth.jsx"));

/**
 * JSX daraxt ko'rinishidagi marshrutlar.
 * App.jsx da <Routes>{routes}</Routes> tarzida ishlatiladi.
 */
export const routes = (
  <>
    {/* Auth sahifalari - Layout-siz, to'liq ekran */}
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    
    {/* Asosiy layout bilan sahifalar */}
    <Route path="/" element={<AppLayout />}>
      {/* Bosh sahifa */}
      <Route index element={<Home />} />
      
      {/* Mahsulot sahifasi */}
      <Route path="product/:id" element={<Product />} />
      
      {/* Protected routes - Login talab qilinadigan sahifalar */}
      <Route element={<RequireAuth />}>
        <Route path="cart" element={<Cart />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </Route>

    {/* 404 sahifa - Layout-siz */}
    <Route path="*" element={<NotFound />} />
  </>
);
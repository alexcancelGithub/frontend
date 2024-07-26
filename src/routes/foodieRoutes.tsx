import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

import { CommonLayout } from "@/layout";

import { FE_ROUTES } from "@/constants";

const { BASE, LOGIN, SIGNUP } = FE_ROUTES;

// TODO: to make a Loading Spinner
const Loadable =
  (Component: React.ComponentType<any>) => (props: JSX.IntrinsicAttributes) =>
    (
      <Suspense fallback={<p>Loading...</p>}>
        <Component {...props} />
      </Suspense>
    );

const HomePage = Loadable(lazy(() => import("../pages/Home")));
const LogInPage = Loadable(lazy(() => import("../pages/LogIn")));
const SignUpPage = Loadable(lazy(() => import("../pages/SignUp")));

export const FoodieRoutes = () => {
  return (
    <Routes>
      <Route element={<CommonLayout />}>
        <Route path={BASE} element={<HomePage />} />
        <Route path={LOGIN} element={<LogInPage />} />
        <Route path={SIGNUP} element={<SignUpPage />} />
      </Route>
    </Routes>
  );
};

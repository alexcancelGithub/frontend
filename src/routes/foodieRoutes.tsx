import { Route, Routes } from "react-router-dom";
import { FE_ROUTES } from "../constants";

const { BASE, LOGIN, SIGNUP } = FE_ROUTES;

export const FoodieRoutes = () => {
  return (
    <Routes>
      <Route path={BASE} element={<h1>HOME PAGE</h1>} />
      <Route path={LOGIN} element={<h1>LOGIN PAGE</h1>} />
      <Route path={SIGNUP} element={<h1>SIGNUP PAGE</h1>} />
    </Routes>
  );
};

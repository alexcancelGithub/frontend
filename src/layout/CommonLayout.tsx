import { Outlet } from "react-router-dom";

import { Footer, Header } from "@/layout";

export const CommonLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

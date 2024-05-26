import { Outlet } from "react-router-dom";

import Header from "@/components/Header";

const MainLayout = () => {
  return (
    <div className="flex h-screen w-full flex-col">
      <Header />
      <Outlet />
    </div>
  );
};

export default MainLayout;

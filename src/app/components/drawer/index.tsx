import React from "react";
import UserInfoSection from "./user-info-section";
import OptionsList from "./options-list";
import DrawerToggleBtn from "./drawer-toggle-btn";

const Drawer = () => {
  return (
    <section className="bg-x-accent-base text-white h-full flex">
      <div>
        <UserInfoSection />
        <OptionsList />
      </div>
      <DrawerToggleBtn />
    </section>
  );
};

export default Drawer;

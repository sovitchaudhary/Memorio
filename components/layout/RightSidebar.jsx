import React from "react";

const RightSidebar = () => {
  return (
    <div className="stickey right-0 top-0 z-20 h-screen w-[300px] xl:w-[350px] flex flex-col gap-12 overflow-auto pl-6 pr-10 py-6 max-lg:hidden">
        <div className="flex flex-col gap-4">
          <h4 className="text-heading4-bold text-light-1">Following</h4>
          <div className="flex flex-col gap-4">Mapping users</div>
        </div>
      <div className="flex flex-col gap-4">
        <h4 className="text-heading4-bold text-light-1">Suggested People </h4>
        <div className="flex flex-col gap-4">Mapping users</div>
      </div>
    </div>
  );
};

export default RightSidebar;

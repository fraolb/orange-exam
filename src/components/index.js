import React from "react";

import AdminPage from "./admin/AdminPage";
import UserPage from "./user/UserPage";

const index = () => {
  return (
    <div>
      <AdminPage />
      <UserPage />
    </div>
  );
};

export default index;

import React from "react";

import ProjectList from "../projects/ProjectList";
import BillsList from "../bills/BillsList";

function Dashboard() {
  
  return (
    <>
      <ProjectList />
      <BillsList />
    </>
  );
}

export default Dashboard;
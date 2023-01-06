import React from "react";
import { Outlet } from "react-router-dom";

const Home: React.FC<{}> = (props) => {
  return (
    <div>
      Home <Outlet />
    </div>
  );
};

export default React.memo(Home);

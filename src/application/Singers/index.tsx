import React, { useState } from "react";
import { alphaTypes, categoryTypes } from "../../api/config";
import Horizon from "../../baseUI/horizon";
import { NavContainer } from "./style";
const Singers: React.FC<{}> = (props) => {
  let [category, setCategory] = useState("");
  let [alpha, setAlpha] = useState("");

  let handleUpdateAlpha = (val: string) => {
    setAlpha(val);
  };

  let handleUpdateCategory = (val: string) => {
    setCategory(val);
  };
  return (
    <NavContainer>
      <Horizon
        list={categoryTypes}
        title={"分类 (默认热门):"}
        handleClick={handleUpdateCategory}
        oldVal={category}
      />
      <Horizon
        list={alphaTypes}
        title={"首字母:"}
        handleClick={(val) => handleUpdateAlpha(val)}
        oldVal={alpha}
      />
    </NavContainer>
  );
};

export default React.memo(Singers);

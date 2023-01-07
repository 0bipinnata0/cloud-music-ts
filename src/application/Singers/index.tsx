import React from "react";
import { alphaTypes, categoryTypes } from "../../api/config";
import Horizon from "../../baseUI/horizon";
import { NavContainer } from "./style";
const Singers: React.FC<{}> = (props) => {
  return (
    <NavContainer>
      <Horizon list={categoryTypes} title={"分类 (默认热门):"} />
      <Horizon list={alphaTypes} title={"首字母:"} />
    </NavContainer>
  );
};

export default React.memo(Singers);

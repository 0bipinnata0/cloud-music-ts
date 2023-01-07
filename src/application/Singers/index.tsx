import React, { useCallback, useEffect, useState } from "react";
import { alphaTypes, areaTypes, singerTypes } from "../../api/config";
import Horizon from "../../baseUI/horizon";
import Loading from "../../baseUI/loading";
import { useAppDispatch } from "../../store";
import {
  changeEnterLoading,
  changePageCount,
  getSingerList,
} from "../../store/singerList/singerListSlice";
import SingerList from "./SingerList";
import { ListContainer, NavContainer } from "./style";

const Singers: React.FC<{}> = (props) => {
  const dispatch = useAppDispatch();
  const [singer, setSinger] = useState("");
  const [area, setArea] = useState("");
  const [alpha, setAlpha] = useState("");

  const handleUpdateAlpha = (val: string) => {
    setAlpha(val);
  };
  const handleUpdateArea = (val: string) => {
    setArea(val);
  };
  const handleUpdateSinger = (val: string) => {
    setSinger(val);
  };
  const updateDispatch = useCallback(
    (singer: string, area: string, alpha: string) => {
      dispatch(changePageCount(0)); //由于改变了分类，所以pageCount清零
      dispatch(changeEnterLoading(true)); //loading，现在实现控制逻辑，效果实现放到下一节，后面的loading同理
      dispatch(getSingerList(singer, area, alpha));
    },
    [dispatch]
  );
  useEffect(() => {
    updateDispatch(singer, area, alpha);
  }, [singer, area, alpha, updateDispatch]);
  return (
    <div>
      <NavContainer>
        <Horizon
          list={singerTypes}
          title={"分类 (默认热门):"}
          handleClick={handleUpdateSinger}
          oldVal={singer}
        />
        <Horizon
          list={areaTypes}
          title={"地区:"}
          handleClick={handleUpdateArea}
          oldVal={area}
        />
        <Horizon
          list={alphaTypes}
          title={"首字母:"}
          handleClick={(val) => handleUpdateAlpha(val)}
          oldVal={alpha}
        />
      </NavContainer>
      <SingerList singer={singer} area={area} alpha={alpha} />
    </div>
  );
};

export default React.memo(Singers);

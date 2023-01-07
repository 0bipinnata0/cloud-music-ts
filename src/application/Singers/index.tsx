import React, { useState } from "react";
import { alphaTypes, categoryTypes } from "../../api/config";
import Horizon from "../../baseUI/horizon";
import Scroll from "../../baseUI/scroll";
import { NavContainer, List, ListItem, ListContainer } from "./style";
//mock 数据
const singerList = new Array(33).fill(0).map((item) => {
  return {
    picUrl:
      "https://p2.music.126.net/uTwOm8AEFFX_BYHvfvFcmQ==/109951164232057952.jpg",
    name: "隔壁老樊",
    accountId: 277313426,
  };
});

// 渲染函数，返回歌手列表
const SingerList = () => {
  return (
    <List>
      {singerList.map((item, index) => {
        return (
          <ListItem key={item.accountId + "" + index}>
            <div className="img_wrapper">
              <img
                src={`${item.picUrl}?param=300x300`}
                width="100%"
                height="100%"
                alt="music"
              />
            </div>
            <span className="name">{item.name}</span>
          </ListItem>
        );
      })}
    </List>
  );
};
const Singers: React.FC<{}> = (props) => {
  const [category, setCategory] = useState("");
  const [alpha, setAlpha] = useState("");

  const handleUpdateAlpha = (val: string) => {
    setAlpha(val);
  };

  const handleUpdateCategory = (val: string) => {
    setCategory(val);
  };
  return (
    <div>
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
      <ListContainer>
        <Scroll>
          <SingerList />
        </Scroll>
      </ListContainer>
    </div>
  );
};

export default React.memo(Singers);

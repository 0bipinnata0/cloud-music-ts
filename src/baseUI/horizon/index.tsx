import React from "react";
import styled from "styled-components";
import Scroll from "../scroll/index";
import globalStyle from "../../assets/global-style";

const List = styled.div`
  display: flex;
  align-items: center;
  height: 30px;
  overflow: hidden;
  > span:first-of-type {
    display: block;
    flex: 0 0 auto;
    padding: 5px 0;
    margin-right: 5px;
    color: grey;
    font-size: ${globalStyle["font-size-m"]};
    vertical-align: middle;
  }
`;
const ListItem = styled.span`
  flex: 0 0 auto;
  font-size: ${globalStyle["font-size-m"]};
  padding: 5px 8px;
  border-radius: 10px;
  &.selected {
    color: ${globalStyle["theme-color"]};
    border: 1px solid ${globalStyle["theme-color"]};
    opacity: 0.8;
  }
`;
//list 为接受的列表数据
//oldVal 为当前的 item 值
//title 为列表左边的标题
//handleClick 为点击不同的 item 执行的方法
type IHorizon = {
  list: {
    key: string;
    name: string;
  }[];
  oldVal?: string;
  title: string;
  handleClick?: (key: string) => void;
};
const Horizon: React.FC<IHorizon> = ({
  list = [],
  oldVal = "",
  title = "",
  handleClick = () => {},
}) => {
  return (
    <Scroll direction="horizontal">
      <div>
        <List>
          <span>{title}</span>
          {list.map((item) => {
            return (
              <ListItem
                key={item.key}
                className={`${oldVal === item.key ? "selected" : ""}`}
                onClick={() => handleClick(item.key)}
              >
                {item.name}
              </ListItem>
            );
          })}
        </List>
      </div>
    </Scroll>
  );
};

export default React.memo(Horizon);

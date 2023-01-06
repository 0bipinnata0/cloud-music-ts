import React from "react";
import { ListWrapper, ListItem, List } from "./style";
import { getCount } from "../../api/utils";

const RecommendList: React.FC<{
  recommendList: Array<{
    id: number;
    picUrl: string;
    playCount: number;
    name: string;
  }>;
}> = ({ recommendList }) => {
  return (
    <ListWrapper>
      <h1 className="title"> 推荐歌单 </h1>
      <List>
        {recommendList.map((item, index) => {
          return (
            <ListItem key={item.id + index}>
              <div className="img_wrapper">
                {/* 加此参数可以减小请求的图片资源大小 */}
                <img
                  src={item.picUrl + "?param=300x300"}
                  width="100%"
                  height="100%"
                  alt="music"
                />
                <div className="play_count">
                  <i className="iconfont play">&#xe885;</i>
                  <span className="count">{getCount(item.playCount)}</span>
                </div>
                <div className="decorate"></div>{" "}
                {/* 遮罩，为了防止无法看清，而且需要在最后一个位置，否则不在图层前面，无法起到遮罩的效果 */}
              </div>
              <div className="desc">{item.name}</div>
            </ListItem>
          );
        })}
      </List>
    </ListWrapper>
  );
};

export default React.memo(RecommendList);

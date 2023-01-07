import React from "react";
import LazyImage from "./LazyImage";
import defaultAvatar from "./music.png";
import { ListWrapper, ListItem, List } from "./style";
import { getCount } from "../../api/utils";
import type { IRecommend } from "../../store/recommendListSlice";

const RecommendList: React.FC<{
  recommendList: IRecommend[];
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
                <LazyImage
                  src={item.picUrl + "?param=300x300"}
                  width="100%"
                  height="100%"
                  alt="music"
                  fallback={
                    <img
                      width="100%"
                      height="100%"
                      src={defaultAvatar}
                      alt="music"
                    />
                  }
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

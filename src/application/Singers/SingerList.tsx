import { useEffect } from "react";
import Scroll from "../../baseUI/scroll";
import { useAppDispatch, useAppSelector } from "../../store";
import {
  changePageCount,
  changePullDownLoading,
  changePullUpLoading,
  getHotSingerList,
  getSingerList,
  refreshMoreHotSingerList,
  refreshMoreSingerList,
  selectSingerList,
} from "../../store/singerList/singerListSlice";

import { List, ListItem } from "./style";

// 渲染函数，返回歌手列表
const SingerList: React.FC<{
  singer: string;
  area: string;
  alpha: string;
}> = ({ singer, area, alpha }) => {
  const { singerList, pullDownLoading, pullUpLoading, pageCount } =
    useAppSelector(selectSingerList);

  const dispatch = useAppDispatch();
  useEffect(() => {
    getHotSingerDispatch();
  }, []);

  function getHotSingerDispatch() {
    dispatch(getHotSingerList());
  }
  // 滑到最底部刷新部分的处理
  function pullUpRefreshDispatch(hot: boolean, count: number) {
    dispatch(changePullUpLoading(true));
    dispatch(changePageCount(count + 1));
    if (hot) {
      dispatch(refreshMoreHotSingerList());
    } else {
      dispatch(refreshMoreSingerList(singer, area, alpha));
    }
  }
  //顶部下拉刷新
  function pullDownRefreshDispatch() {
    dispatch(changePullDownLoading(true));
    dispatch(changePageCount(0)); //属于重新获取数据
    if ([singer, area, alpha].every((item) => item === "")) {
      dispatch(getHotSingerList());
    } else {
      dispatch(getSingerList(singer, area, alpha));
    }
  }
  return (
    <Scroll
      pullDownLoading={pullDownLoading}
      pullDown={pullDownRefreshDispatch}
      pullUpLoading={pullUpLoading}
      pullUp={() => {
        pullUpRefreshDispatch(true, pageCount);
      }}
    >
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
    </Scroll>
  );
};
export default SingerList;

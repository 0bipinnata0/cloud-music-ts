import React, { useEffect } from "react";
import Slider from "../../components/slider";
import RecommendList from "../../components/list";
import { Content } from "./style";
import Scroll from "../../baseUI/scroll";
import {
  getRecommendList,
  selectRecommendList,
} from "../../store/recommendListSlice";
import { getBannerList, selectBannerList } from "../../store/bannerListSlice";
import { useAppDispatch, useAppSelector } from "../../store";
import Loading from "../../baseUI/loading";
const Recommend: React.FC<{}> = (props) => {
  const dispatch = useAppDispatch();
  const bannerList = useAppSelector(selectBannerList);

  const { value: recommendList, status: enterLoading } =
    useAppSelector(selectRecommendList);

  useEffect(() => {
    if (!bannerList.length) {
      dispatch(getBannerList());
    }
    if (!recommendList.length) {
      dispatch(getRecommendList());
    }
    //eslint-disable-next-line
  }, []);

  return (
    <Content>
      <Scroll className="list">
        <div>
          <Slider bannerList={bannerList}></Slider>
          <RecommendList recommendList={recommendList}></RecommendList>
        </div>
      </Scroll>
      {enterLoading === "loading" && <Loading />}
    </Content>
  );
};

export default React.memo(Recommend);

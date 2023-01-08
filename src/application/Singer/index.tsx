import { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import { CSSTransition } from "react-transition-group";
import Header from "../../baseUI/header";
import Scroll, { ScrollElement } from "../../baseUI/scroll";
import SongsList from "../SongsList";
import {
  BgLayer,
  CollectButton,
  Container,
  ImgWrapper,
  SongListWrapper,
} from "./style";

const artist = {
  picUrl:
    "https://p2.music.126.net/W__FCWFiyq0JdPtuLJoZVQ==/109951163765026271.jpg",
  name: "薛之谦",
  hotSongs: new Array(20).fill(1).map(() => {
    return JSON.parse(
      JSON.stringify({
        name: "我好像在哪见过你",
        ar: [{ name: "薛之谦" }],
        al: {
          name: "薛之谦专辑",
        },
      })
    );
  }),
};

const Singer: React.FC<{}> = (props) => {
  const [showStatus, setShowStatus] = useState(true);
  const navigate = useNavigate();

  const collectButton = useRef<HTMLDivElement>(null);
  const imageWrapper = useRef<HTMLDivElement>(null);
  const songScrollWrapper = useRef<HTMLDivElement>(null);
  const songScroll = useRef<ScrollElement>(null);
  const header = useRef<HTMLDivElement>(null);
  const layer = useRef<HTMLDivElement>(null);
  // 图片初始高度
  const initialHeight = useRef(0);

  // 往上偏移的尺寸，露出圆角
  const OFFSET = 5;

  useEffect(() => {
    console.info(imageWrapper.current);
    console.info(songScrollWrapper.current);
    console.info(layer.current);
    console.info(songScroll.current);
    if (
      imageWrapper.current &&
      songScrollWrapper.current &&
      layer.current &&
      songScroll.current
    ) {
      const h = imageWrapper.current.offsetHeight;
      initialHeight.current = h;
      songScrollWrapper.current.style.top = `${h - OFFSET}px`;
      //把遮罩先放在下面，以裹住歌曲列表
      layer.current.style.top = `${h - OFFSET}px`;
      songScroll.current.refresh();
    }
    //eslint-disable-next-line
  }, []);

  const setShowStatusFalse = useCallback(() => {
    setShowStatus(false);
  }, []);
  return (
    <CSSTransition
      in={showStatus}
      timeout={300}
      classNames="fly"
      appear
      unmountOnExit
      onExited={() => navigate(-1)}
    >
      <Container>
        <Header handleClick={setShowStatusFalse} ref={header}>
          {artist.name}
        </Header>
        <ImgWrapper bgUrl={artist.picUrl} ref={imageWrapper}>
          <div className="filter" />
        </ImgWrapper>
        <CollectButton ref={collectButton}>
          <i className="iconfont">&#xe62d;</i>
          <span className="text"> 收藏 </span>
        </CollectButton>
        <BgLayer ref={layer} />
        <SongListWrapper ref={songScrollWrapper}>
          <Scroll ref={songScroll}>
            <SongsList songs={artist.hotSongs} showCollect={false} />
          </Scroll>
        </SongListWrapper>
      </Container>
    </CSSTransition>
  );
};

export default Singer;

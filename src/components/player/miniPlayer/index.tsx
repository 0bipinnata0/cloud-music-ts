import React, { useRef } from "react";
import { getName } from "../../../api/utils";
import { MiniPlayerContainer } from "./style";
import { CSSTransition } from "react-transition-group";
import usePlayer from "../hooks/usePlayer";
import { TrackDetail } from "../../../api/request/getAlbumDetailRequest";

const MiniPlayer: React.FC<{
  song: TrackDetail;
}> = ({ song }) => {
  const { fullScreen, toggleFullScreenDispatch } = usePlayer();
  const miniPlayerRef = useRef<HTMLDivElement>(null);

  return (
    <CSSTransition
      in={!fullScreen}
      timeout={400}
      classNames="mini"
      onEnter={() => {
        miniPlayerRef.current && (miniPlayerRef.current.style.display = "flex");
      }}
      onExited={() => {
        miniPlayerRef.current && (miniPlayerRef.current.style.display = "none");
      }}
    >
      <MiniPlayerContainer
        ref={miniPlayerRef}
        onClick={() => toggleFullScreenDispatch(true)}
      >
        <div className="icon">
          <div className="imgWrapper">
            <img
              className="play"
              src={song.al.picUrl}
              width="40"
              height="40"
              alt="img"
            />
          </div>
        </div>
        <div className="text">
          <h2 className="name">{song.name}</h2>
          <p className="desc">{getName(song.ar)}</p>
        </div>
        <div className="control">
          <i className="iconfont">&#xe650;</i>
        </div>
        <div className="control">
          <i className="iconfont">&#xe640;</i>
        </div>
      </MiniPlayerContainer>
    </CSSTransition>
  );
};

export default React.memo(MiniPlayer);

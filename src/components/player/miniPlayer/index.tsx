import React from "react";
import { getName } from "../../../api/utils";
import type { IHotSong } from "../../../api/request/getSingerInfoRequest";
import { MiniPlayerContainer } from "./style";

const MiniPlayer: React.FC<{
  song: Pick<IHotSong, "ar" | "al" | "name">;
}> = ({ song }) => {
  return (
    <MiniPlayerContainer>
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
  );
};

export default React.memo(MiniPlayer);

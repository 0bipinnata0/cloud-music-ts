import type { IRank } from "../../api/request/getRankListRequest";
import SongList from "./SongList";
import { List, ListItem } from "./style";

const RankList: React.FC<{
  list: IRank[];
  global?: boolean;
}> = ({ list, global = false }) => {
  return (
    <List isGlobal={global}>
      {list.map((item) => {
        return (
          <ListItem key={item.commentThreadId} show={!!item.tracks.length}>
            <div className="img_wrapper">
              <img src={item.coverImgUrl} alt="" />
              <div className="decorate"></div>
              <span className="update_frequency">{item.updateFrequency}</span>
            </div>
            <SongList traces={item.tracks} />
          </ListItem>
        );
      })}
    </List>
  );
};

export default RankList;

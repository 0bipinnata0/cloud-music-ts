import { TrackDetail } from "../../../api/request/getAlbumDetailRequest";
import { ITrack } from "../../../api/request/getRankListRequest";
import useAppDispatch from "../../../hooks/useAppDispatch";
import useAppSelector from "../../../hooks/useAppSelector";
import {
  changeCurrentIndex,
  changeCurrentSong,
  changeFullScreen,
  changePlayingState,
  changePlayList,
  changePlayMode,
  changeSequencePlayList,
  changeShowPlayList,
  PlayMode,
  selectPlayer,
} from "../../../store/player/playerSlice";

const usePlayer = () => {
  const dispatch = useAppDispatch();
  const player = useAppSelector(selectPlayer);

  const togglePlayingDispatch = (data: boolean) => {
    dispatch(changePlayingState(data));
  };
  const toggleFullScreenDispatch = (data: boolean) => {
    dispatch(changeFullScreen(data));
  };
  const togglePlayListDispatch = (data: boolean) => {
    dispatch(changeShowPlayList(data));
  };
  const changeCurrentIndexDispatch = (index: number) => {
    dispatch(changeCurrentIndex(index));
  };
  const changeCurrentDispatch = (index: number) => {
    dispatch(changeCurrentSong(index));
  };
  const changeModeDispatch = (mode: PlayMode) => {
    dispatch(changePlayMode(mode));
  };
  const changePlayListDispatch = (data: TrackDetail[]) => {
    dispatch(changePlayList(data));
  };
  const changeSequencePlayListDispatch = (data: TrackDetail[]) => {
    dispatch(changeSequencePlayList(data));
  };

  const playCurrent = (list: TrackDetail[], index: number) => {
    changePlayListDispatch(list);
    changeSequencePlayListDispatch(list);
    changeCurrentIndexDispatch(index);
    changeCurrentDispatch(index);
  };
  return {
    ...player,
    playCurrent,
    togglePlayingDispatch,
    toggleFullScreenDispatch,
    togglePlayListDispatch,
    changeCurrentIndexDispatch,
    changeCurrentDispatch,
    changeModeDispatch,
    changePlayListDispatch,
    changeSequencePlayListDispatch,
  };
};
export default usePlayer;

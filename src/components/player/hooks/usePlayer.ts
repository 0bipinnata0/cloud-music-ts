import useAppDispatch from "../../../hooks/useAppDispatch";
import useAppSelector from "../../../hooks/useAppSelector";
import {
  changeCurrentIndex,
  changeCurrentSong,
  changeFullScreen,
  changePlayingState,
  changePlayList,
  changePlayMode,
  changeShowPlayList,
  PlayMode,
  selectPlayer,
} from "../../../store/player/playerSlice";

const usePlayer = () => {
  const dispatch = useAppDispatch();
  const a = useAppSelector(selectPlayer);
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
  const changePlayListDispatch = (data: []) => {
    dispatch(changePlayList(data));
  };
  return {
    ...a,
    togglePlayingDispatch,
    toggleFullScreenDispatch,
    togglePlayListDispatch,
    changeCurrentIndexDispatch,
    changeCurrentDispatch,
    changeModeDispatch,
    changePlayListDispatch,
  };
};
export default usePlayer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "..";

type IPlayerState = {
  fullScreen: boolean;
  playing: boolean;
  sequencePlayList: never[];
  playList: never[];
  mode: PlayMode;
  currentIndex: number;
  showPlayList: boolean;
  currentSong: {};
};
export enum PlayMode {
  sequence,
  loop,
  random,
}
const initialState: IPlayerState = {
  fullScreen: false, // 播放器是否为全屏模式
  playing: false, // 当前歌曲是否播放
  sequencePlayList: [], // 顺序列表 (因为之后会有随机模式，列表会乱序，因从拿这个保存顺序列表)
  playList: [],
  mode: PlayMode.sequence, // 播放模式
  currentIndex: -1, // 当前歌曲在播放列表的索引位置
  showPlayList: false, // 是否展示播放列表
  currentSong: {},
};

const playerSlice = createSlice({
  name: "player",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    changeCurrentSong: (state, action: PayloadAction<number>) => {
      state.currentSong = action.payload;
    },
    changeFullScreen: (state, action: PayloadAction<boolean>) => {
      state.fullScreen = action.payload;
    },
    changePlayingState: (state, action: PayloadAction<boolean>) => {
      state.playing = action.payload;
    },
    changeSequencePlayList: (state, action: PayloadAction<[]>) => {
      state.sequencePlayList = action.payload;
    },
    changePlayList: (state, action: PayloadAction<[]>) => {
      state.playList = action.payload;
    },
    changePlayMode: (state, action: PayloadAction<PlayMode>) => {
      state.mode = action.payload;
    },
    changeCurrentIndex: (state, action: PayloadAction<number>) => {
      state.currentIndex = action.payload;
    },
    changeShowPlayList: (state, action: PayloadAction<boolean>) => {
      state.showPlayList = action.payload;
    },
  },
});

export const {
  changeCurrentSong,
  changeFullScreen,
  changePlayingState,
  changeSequencePlayList,
  changePlayList,
  changePlayMode,
  changeCurrentIndex,
  changeShowPlayList,
} = playerSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`

export const selectPlayer = (state: RootState) => state.player;

export default playerSlice.reducer;

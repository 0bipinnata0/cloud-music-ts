import axios from "axios";

// npx NeteaseCloudMusicApi
export const baseUrl = "http://localhost:3000";

//axios 的实例及拦截器配置
const axiosInstance = axios.create({
  baseURL: baseUrl,
});

axiosInstance.interceptors.response.use(
  (res) => res,
  (err) => {
    console.log(err, "网络错误");
  }
);

export { axiosInstance };

// 歌手种类
export const singerTypes = [
  {
    key: "-1",
    value: "全部",
  },
  { key: "1", value: "男歌手" },
  { key: "2", value: "女歌手" },
  { key: "3", value: "乐队" },
];
// 地区首字母
export const areaTypes = [
  {
    key: "-1",
    value: "全部",
  },
  {
    key: "7",
    value: "华语",
  },
  {
    key: "96",
    value: "欧美",
  },
  {
    key: "8",
    value: "日本",
  },
  {
    key: "16",
    value: "韩国",
  },
  {
    key: "0",
    value: "其他",
  },
];

// 歌手首字母
export const alphaTypes = [
  {
    key: "A",
    value: "A",
  },
  {
    key: "B",
    value: "B",
  },
  {
    key: "C",
    value: "C",
  },
  {
    key: "D",
    value: "D",
  },
  {
    key: "E",
    value: "E",
  },
  {
    key: "F",
    value: "F",
  },
  {
    key: "G",
    value: "G",
  },
  {
    key: "H",
    value: "H",
  },
  {
    key: "I",
    value: "I",
  },
  {
    key: "J",
    value: "J",
  },
  {
    key: "K",
    value: "K",
  },
  {
    key: "L",
    value: "L",
  },
  {
    key: "M",
    value: "M",
  },
  {
    key: "N",
    value: "N",
  },
  {
    key: "O",
    value: "O",
  },
  {
    key: "P",
    value: "P",
  },
  {
    key: "Q",
    value: "Q",
  },
  {
    key: "R",
    value: "R",
  },
  {
    key: "S",
    value: "S",
  },
  {
    key: "T",
    value: "T",
  },
  {
    key: "U",
    value: "U",
  },
  {
    key: "V",
    value: "V",
  },
  {
    key: "W",
    value: "W",
  },
  {
    key: "X",
    value: "X",
  },
  {
    key: "Y",
    value: "Y",
  },
  {
    key: "Z",
    value: "Z",
  },
];

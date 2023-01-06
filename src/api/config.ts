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

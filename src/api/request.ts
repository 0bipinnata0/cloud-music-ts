import { axiosInstance } from "./config";

export const getBannerRequest = () => {
  return axiosInstance.get("/banner");
};

export const getRecommendListRequest = () => {
  return axiosInstance.get("/personalized");
};

export const getHotSingerListRequest = (count: number) => {
  return axiosInstance.get(`/top/artists?offset=${count}`);
};

export const getSingerListRequest = (
  type: string,
  area: string,
  alpha: string,
  count?: number
) => {
  return axiosInstance.get(`/artist/list`, {
    params: {
      type,
      area,
      initial: alpha.toLowerCase(),
      offset: count,
    },
  });
};

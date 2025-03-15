import comingMoives from "../../../../mock/comming.json";

export const fetchComingMoives = () => {
  const result = comingMoives.data.result;
  return result;
};

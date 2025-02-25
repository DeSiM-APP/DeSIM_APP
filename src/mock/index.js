import { cards } from "./mockCardData";
import { mockESIMData, detailData } from "./mockDashboard";
const asyncGet = (data, delay = null) => {
  const randomDelay = delay || Math.floor(Math.random() * 1500) + 500;
  
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, randomDelay);
  });
};

export {
  cards,
  asyncGet,
  mockESIMData,
  detailData
}
import { cards } from "./mockCardData";
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
  asyncGet
}
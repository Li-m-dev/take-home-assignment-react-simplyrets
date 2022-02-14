export const getBathCount = (bathsFull, bathsHalf) => {
  let totalCount = 0;
  if (bathsFull && bathsHalf) {
    totalCount = bathsFull + bathsHalf / 2;
  }
  if (bathsFull && !bathsHalf) {
    totalCount = bathsFull;
  }
  if (!bathsFull && bathsHalf) {
    totalCount = bathsHalf / 2;
  }
  return totalCount;
};

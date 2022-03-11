export const getRate = (price, quantity) => {
  return Number((price / quantity).toFixed(2));
};

export const isValidRate = rate => {
  return !isNaN(rate) && isFinite(rate);
};

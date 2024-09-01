export const currencyformat = (num: number) => {
  return num.toLocaleString("vi", { style: "currency", currency: "VND" });
};

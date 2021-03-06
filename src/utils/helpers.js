export const formatPrice = (number) => {
  return new Intl.NumberFormat('en-UK', {
    style: 'currency',
    currency: 'GBP',
  }).format(number / 100);
};

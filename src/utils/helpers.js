export const formatPrice = (number) => {
  return new Intl.NumberFormat('en-UK', {
    style: 'currency',
    currency: 'GBP',
  }).format(number / 100);
};

export const getUniqueValues = (data, type) => {
  let unique = data.map((item) => item[type]);

  if (type === 'colors') {
    unique = unique.flat();
  }

  return ['all', ...new Set(unique)];
};

export const formatCurrency = (budget = 0) => {
  const arExt = ['', 'тыс.', 'млн.', 'млрд.'];
  let extNum = 0;
  let sum = budget || 0;
  while (sum > 1000 && extNum < 4) {
    sum /= 1000;
    extNum += 1;
  }
  const sumStr = (extNum > 0 ? sum.toFixed(1) : sum.toFixed(2));
  return `${sumStr} ${arExt[extNum]} ₽`;
};

export const currencyToText = (start = 0, end = 0) => {
  const formatter = new Intl.NumberFormat('ru', { style: 'decimal', currency: 'RUB' });
  if (start === 0 && end === 0) {
    return 'Все';
  }
  if (start === 0) {
    return `Менее ${formatter.format(end)} ₽`;
  }
  if (end === 0) {
    return `${formatter.format(start)} ₽ и более`;
  }
  return `${formatter.format(start)} ₽ - ${formatter.format(end)} ₽`;
};

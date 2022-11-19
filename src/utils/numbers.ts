// Commons
export const formatters = {
  default: new Intl.NumberFormat(),
  currency: new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }),
  percent: new Intl.NumberFormat('en-US', {
    style: 'percent',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }),
  twoDecimal: new Intl.NumberFormat('en-US', {
    style: 'decimal',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }),
  eightDecimal: new Intl.NumberFormat('en-US', {
    style: 'decimal',
    minimumFractionDigits: 0,
    maximumFractionDigits: 8,
  }),
};

export const absNumber = (value: any) => {
  try {
    const amount = parseFloat(value);
    return Math.abs(amount);
  } catch (error) {
    console.error('formatAbsAmount', error);
    return 0;
  }
};

export const getAmountFromCurrencyString = (value: string) => {
  if (value) {
    value = value.replace(/[^\d.-]/g, '');
    return parseFloat(value);
  }
  return 0;
};

export const convertNumberToCurrencyAbbreviated: (value: number, type?: string) => string = (
  value = 0,
  type = 'currency'
) => {
  switch (true) {
    case value >= 1000000000:
      if (type === 'number') {
        return `${formatters.twoDecimal.format(value / 1000000000)}b`;
      } else {
        return `${formatters.currency.format(value / 1000000000)}b`;
      }
    case value >= 1000000:
      if (type === 'number') {
        return `${formatters.twoDecimal.format(value / 1000000)}m`;
      } else {
        return `${formatters.currency.format(value / 1000000)}m`;
      }
    case value >= 1000:
      if (type === 'number') {
        return `${formatters.twoDecimal.format(value / 1000)}k`;
      } else {
        return `${formatters.currency.format(value / 1000)}k`;
      }
    default:
      if (type === 'number') {
        return formatters.twoDecimal.format(value);
      } else {
        return formatters.currency.format(value);
      }
  }
};

export const formatRangeChart = (value: any) => {
  const valueNumber = Number(value) || 0;
  const absNumber = Math.abs(valueNumber);
  if (absNumber === 0) return '$0.00';

  if (absNumber < 0.000001 || absNumber < -0.000001) return `$${valueNumber?.toFixed(9)}`;

  if (absNumber > 0.000001 && absNumber < 0.01) return `$${parseFloat(valueNumber?.toFixed(7))}`;

  return formatters.currency.format(valueNumber);
};

// Handle Input Number Antd
export const antdInputNumberFormat = (value: number, symbol = ''): string => {
  return `${symbol}${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',').replace(/\./g, '');
};

export const antdInputNumberParse = (value: string, symbol = ''): string => {
  const temp = new RegExp('\\' + symbol + '\\s?|(,*)', 'g');
  return value?.replace(temp, '');
};

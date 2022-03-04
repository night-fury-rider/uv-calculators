export const getNumberFormat = (num, decimalPlaces, countryCode, languageCode) => {
  return num.toLocaleString(languageCode + '-' + countryCode, {
    maximumFractionDigits: decimalPlaces
  });
};


export const getSimplePercentage = (param1, param2, decimalPlaces, countryCode, langCode) => {
  return getPercentage(param1 * (param2 / 100), decimalPlaces, countryCode, langCode);
};

export const getReversePercentage = (param1, param2, decimalPlaces, countryCode, langCode) => {
  return getPercentage((param1 / param2) * 100, decimalPlaces, countryCode, langCode);
};

export const getPercentageChange = (param1, param2, decimalPlaces, countryCode, langCode) => {
  return getPercentage((((param1 + param2) - param1) / param1) * 100 - 100, decimalPlaces, countryCode, langCode);
};

export const getAmountByPercentageChange = (param1, param2, decimalPlaces, countryCode, langCode) => {
  return getPercentage(param1 + (param1 * (param2 / 100)), decimalPlaces, countryCode, langCode);
};

export const getPercentage = (result, decimalPlaces, countryCode, langCode) => {
  if (!isNaN(result) && isFinite(result)) {
    return getNumberFormat(result, decimalPlaces, countryCode, langCode);
  }
  return 0;
};
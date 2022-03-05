export const getTaxExemptedHRA = (basicSalary, hra, rent) => {
  return Math.min(hra, Math.round(0.4 * basicSalary), (rent - Math.round(0.1 * basicSalary))).toLocaleString('en-IN');
};

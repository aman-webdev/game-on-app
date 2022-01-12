// DATES
const getCurrentYear = () => new Date().getFullYear();
const getCurrentMonth = () => {
  const curMonth = new Date().getMonth() + 1;
  if (curMonth < 10) {
    return `0${curMonth}`;
  } else {
    return curMonth;
  }
};
const getCurrentDate = () => {
  const curDate = new Date().getDate();
  if (curDate < 10) {
    return `0${curDate}`;
  } else {
    return curDate;
  }
};

export const currentYearDate = `${getCurrentYear()}-${getCurrentMonth()}-${getCurrentDate()}`;
export const nextYearDate = `${
  getCurrentYear() + 1
}-${getCurrentMonth()}-${getCurrentDate()}`;
export const prevYearDate = `${
  getCurrentYear() - 1
}-${getCurrentMonth()}-${getCurrentDate()}`;

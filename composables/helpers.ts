export const calculateAgeInYears = (birthdate: Date): Number => {
  const today = new Date();
  const differenceInMilliseconds = today.getTime() - birthdate.getTime();

  return differenceInMilliseconds != 0
    ? Math.ceil(differenceInMilliseconds / (1000 * 60 * 60 * 24 * 365))
    : 1;
};

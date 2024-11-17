export const getOrdinalSuffix = (num: number): string => {
  const remainder10 = num % 10;
  const remainder100 = num % 100;

  if (remainder100 >= 11 && remainder100 <= 13) {
    return 'th';
  }

  switch (remainder10) {
    case 1: {
      return 'st';
    }
    case 2: {
      return 'nd';
    }
    case 3: {
      return 'rd';
    }
    default: {
      return 'th';
    }
  }
};

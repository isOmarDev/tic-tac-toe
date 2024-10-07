// Format url pathname
export const formatPathname = (str: string = '') => {
  return str.split('-').join(' ').slice(1);
};

import moment from 'moment';

export const getFormattedDate = (dateString) => {
  return moment(dateString).format('l');
};

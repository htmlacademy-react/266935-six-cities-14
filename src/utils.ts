import dayjs from 'dayjs';

export function convertRating(rating: number): string{
  const convertedRating = rating * 20;
  let convertedRatingString = convertedRating.toString();
  if (convertedRatingString !== undefined){
    convertedRatingString += '%';
  }
  return convertedRatingString;
}

export function formatDate(date: string): string {
  return dayjs(date).format('MMMM YYYY');
}


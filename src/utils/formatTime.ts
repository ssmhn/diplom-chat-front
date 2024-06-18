import { format, getTime, formatDistanceToNow } from 'date-fns';

export const fDate = (date: string) => {
  return format(new Date(date), 'dd MMMM yyyy');
}

export const fDateTime = (date: string) => {
  return format(new Date(date), 'dd MMM yyyy HH:mm');
}

export const fTimestamp = (date: string) => {
  return getTime(new Date(date));
}

export const fDateTimeSuffix = (date: string) => {
  return format(new Date(date), 'dd/MM/yyyy hh:mm p');
}

export const fToNow = (date: string) => {
  return formatDistanceToNow(new Date(date), {
    addSuffix: true,
  });
}

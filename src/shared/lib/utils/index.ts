import clsx from 'clsx';
import { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const constructDate = (date: string) => {
  const createdAt = new Date(date);
  const d = {
    date: createdAt.getDate() > 10 ? createdAt.getDate() : `0${createdAt.getDate()}`,
    month: createdAt.getMonth() > 10 ? createdAt.getMonth() : `0${createdAt.getMonth()}`,
    year: createdAt.getFullYear(),
  };
  const fullDate = `${d.date}.${d.month}.${d.year}`;
  const t = {
    hour: createdAt.getHours() >= 10 ? createdAt.getHours() : `0${createdAt.getHours()}`,
    minutes: createdAt.getMinutes() >= 10 ? createdAt.getMinutes() : `0${createdAt.getMinutes()}`,
  };
  const time = `${t.hour}:${t.minutes}`;
  return { fullDate, time };
};

// Debounce utility
export function debounce<T extends (...args: unknown[]) => void>(func: T, wait: number) {
  let timeout: ReturnType<typeof setTimeout> | null;
  return function (this: unknown, ...args: Parameters<T>) {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(this, args);
    }, wait);
  } as T;
}

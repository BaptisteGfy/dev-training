import { ApiResult } from './users';

export const getFirstElement = <T>(array: T[]): T | undefined => {
  return array[0];
};

export const mergeObjects = <T, U>(obj1: T, obj2: U): T & U => {
  return { ...obj1, ...obj2 };
};

export const getObjectId = <T extends { id: number }>(obj: T): number => {
  return obj.id;
};

export const getPropertyValue = <T, K extends keyof T>(
  obj: T,
  key: K,
): T[K] => {
  return obj[key];
};

export const wrapSuccess = <T>(data: T): ApiResult<T> => {
  return { success: true, data };
};

export const wrapError = (message: string): ApiResult<never> => {
  return { success: false, error: message };
};

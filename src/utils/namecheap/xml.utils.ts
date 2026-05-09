export const toArray = <T>(value: T | T[] | undefined): T[] => value ? (Array.isArray(value) ? value : [value]) : [];

export const getAttr = (obj: any) => obj?.$ ?? {};

export const isYearlyPrice = (p: any) => p?.$?.Duration === '1' && p?.$?.DurationType === 'YEAR';
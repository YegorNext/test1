export function mergeParams(base: Record<string, string>, extra: Record<string, string>): Record<string, string> 
{
  return {
    ...base,
    ...extra,
  };
}
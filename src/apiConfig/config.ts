export const fetcher = (arg: any, ...args: any) =>
   fetch(arg, ...args).then((res) => res.json());

export type StoreAction<D = unknown, T = unknown> = (
  this: D,
  params: T,
) => Promise<void>;

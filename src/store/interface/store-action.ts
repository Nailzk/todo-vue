export type StoreAction<D = unknown, T = {}> = (
  this: D,
  params?: T,
) => void;

export type StoreActionParams<S = unknown, P = {}> = (
  this: S,
  params: P
) => void;
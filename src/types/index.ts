export interface IPost {
  id: number;
  value: string;
  text: string;
}

export interface IVirtualizationSettings {
  minInd: number;
  maxInd: number;
  startInd: number;
  itemHeight: number;
  amount: number;
  tolerance: number;
}
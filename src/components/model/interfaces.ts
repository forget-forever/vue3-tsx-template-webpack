export interface IData {
  ele: any 
}

export interface IPage {
  onshow?: () => void;
  onPullingDown?: (over: (t: number) => void) => void;
  onPullingUp?: (over: (t: number) => void) => void;
  onScroll?: (pos: any) => void
}
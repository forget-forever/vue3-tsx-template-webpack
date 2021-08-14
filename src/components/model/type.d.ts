export interface IData {
  ele: any 
}

export interface IPage {
  onshow?: () => void;
  onPullingDown?: (over: (t: 'up' | 'down') => void) => void;
  onPullingUp?: (over: (t: 'up' | 'down') => void) => void;
  onScroll?: (pos: any) => void
}
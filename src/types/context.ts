// Types
export interface Context {
  lenguage: boolean;
  isMobile: boolean;
  colorMode: boolean;
  prevScrollPos: number;
  isHeaderVisible: boolean;
  setLenguage: React.Dispatch<React.SetStateAction<boolean>>;
  setColorMode: React.Dispatch<React.SetStateAction<boolean>>;
}

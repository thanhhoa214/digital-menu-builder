export interface Box {
  id: number;
  templateId: number;
  typeId: number;
  location: number;
  boxTypeId: number;
  src: string;
  headerTitle: string;
  footerTitle: string;
  headerSrc: string;
  footerSrc: string;
  isAvailable: boolean;
}

export type Boxes = Array<Box>;
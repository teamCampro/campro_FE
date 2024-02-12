import { ReactNode } from 'react';

export interface LayoutType {
  children: ReactNode;
}

export interface CampSiteSectionType {
  sectionRef: React.RefObject<HTMLDivElement>;
  id: string;
}

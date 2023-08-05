export interface iCreateBookDto {
  title: string;
  description?: string;
  authors?: string[];
  favorite?: string;
  fileCover?: string;
  fileName?: string;
}

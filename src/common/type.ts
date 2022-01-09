export interface IPost {
  path: string;
  content: string;
  title: string;
  date: string; // yyyyMMdd
  isPublished?: boolean;
}

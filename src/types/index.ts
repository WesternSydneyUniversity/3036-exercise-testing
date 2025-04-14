export interface Post {
  id: number;
  title: string;
  content: string;
  date: string; // ISO format, e.g., "2025-04-13"
  tags: string[];
}

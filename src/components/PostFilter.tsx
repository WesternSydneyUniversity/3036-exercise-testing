import { Post } from "../types";

interface PostFilterProps {
  posts: Post[];
}

export function PostFilter({ posts }: PostFilterProps) {
  return <div>{/* TODO: Add filter controls for date and tags */}</div>;
}

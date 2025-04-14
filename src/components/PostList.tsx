import { Post } from "../types";

interface PostListProps {
  posts: Post[];
}

export function PostList({ posts }: PostListProps) {
  return (
    <div>
      <h2>Posts</h2>
      {/* TODO: Render list of posts */}
    </div>
  );
}

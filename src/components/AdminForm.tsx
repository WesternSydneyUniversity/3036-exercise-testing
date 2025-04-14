import { savePost } from "../actions/posts";
import { Post } from "../types";

interface AdminFormProps {
  post?: Post; // Optional for editing
}

export function AdminForm({ post }: AdminFormProps) {
  return (
    <form action={savePost}>
      {/* TODO: Add form fields for title, content, tags */}
      <button type="submit">Save</button>
    </form>
  );
}

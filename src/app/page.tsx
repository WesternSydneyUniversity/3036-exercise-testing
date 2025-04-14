"use client";

import React from "react";
import PostFilter from "../components/PostFilter";
import PostList from "../components/PostList";
import { posts } from "../lib/data";

export default async function () {
  const filteredPosts = posts; // TODO: Implement filtering logic
  return (
    <div>
      <PostFilter posts={filteredPosts} />
      <PostList posts={filteredPosts} />
    </div>
  );
}

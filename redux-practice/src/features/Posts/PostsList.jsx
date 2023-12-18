import React from "react";
import { useSelector } from "react-redux";
import { selectAllPosts } from "./PostsSlice";

export default function PostsList() {
  // To simplify the process, we call it in the postsSlice in case its structure changes
  const posts = useSelector(selectAllPosts);
  console.log(posts);
  return (
    <section className="w-1/2 bg-slate-200 mx-auto text-slate-800 pb-20">
      <h2 className="text-center"> Posts</h2>
      {posts.map((post) => (
        <article
          key={post.id}
          className=" border-2 border-slate-900 p-10 m-10 "
        >
          <h1 className="font-bold uppercase"> {post.title}</h1>
          <p> {post.content}</p>
        </article>
      ))}
    </section>
  );
}

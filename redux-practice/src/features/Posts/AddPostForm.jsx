import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postAdded } from "./postsSlice";
import { selectAllUsers } from "../Users/UserSlice";

export default function AddPostForm() {
  // controlled components that does not require other compo to share that's why declared inside this compo and not in global state
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");

  const dispatch = useDispatch();
  // read data from user slice
  const users = useSelector(selectAllUsers);

  const handlePostAdded = (e) => {
    e.preventDefault();
    if (title && content) {
      //this approach requires us to know about the state to properly send data
      //   dispatch(
      //     postAdded({
      //       id: nanoid(),
      //       title: title,
      //       content: content,
      //     })
      //   );

      //  state logic is asbtracted and simple
      dispatch(postAdded(title, content, userId));
      setTitle("");
      setContent("");
    }
    console.log(title, content);
  };

  const optionsAvailable = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  const onSave = Boolean(title) && Boolean(content) && Boolean(userId);
  return (
    <section className="w-1/2 mx-auto border-2 bg-slate-200 text-slate-800">
      <h2 className="text-center font-bold text-xl "> Add a new post</h2>
      <form>
        <div className="border-2 border-slate-800 p-5 flex flex-col justify-center ">
          <div className="flex flex-col gap-5 p-5">
            {" "}
            <label htmlFor="title"> Title </label>
            <input
              className="px-5 py-2 rounded-lg"
              type="text"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-5 p-5">
            {" "}
            <label htmlFor="content"> Content </label>
            <textarea
              className="px-5 py-5 rounded-lg "
              type="text"
              name="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-5 p-5">
            <label htmlFor="postAuthor"> Author </label>
            {/* important to note that select ID is same as label ID */}
            <select
              id="postAuthor"
              value={userId}
              className="px-5 py-2 rounded-lg"
              onChange={(e) => setUserId(e.target.value)}
            >
              <option></option>
              {optionsAvailable}
            </select>
          </div>
          <div className="flex justify-center">
            <button
              className={`px-5 py-3 rounded-lg ${
                onSave ? " bg-slate-800" : "bg-slate-300"
              } text-slate-100 w-1/2`}
              onClick={handlePostAdded}
              disabled={!onSave}
            >
              Save Post{" "}
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}

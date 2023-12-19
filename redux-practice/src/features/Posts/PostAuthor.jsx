/*

 This component reads data from userSlice
 Filters out user name from id passed down from posts component

*/

import React from "react";
import { useSelector } from "react-redux";
import { selectAllUsers } from "../Users/UserSlice";

export default function PostAuthor({ userId }) {
  const users = useSelector(selectAllUsers);
  const author = users.find((user) => {
    //Check the same return type if not it does not work
    return Number(user.id) === Number(userId);
  });
  console.log("author", author);
  return <span>{author ? author.name : "Unknown"}</span>;
}

import React from "react";
import "../App.css";
import Db from "../db.json";
import { useState } from "react";

export default function Posts() {
  const postArray = [];
  // eslint-disable-next-line array-callback-return
  Object.keys(Db).map((key) => {
    postArray.push(Db[key]);
  });

  const [posts] = useState(postArray.reverse());

  return (
    <div className="main-div-posts">
      {posts.map((post, key) => (
        <div className="post-place" key={key}>
          <h4 className="post-header">{post.baslik}</h4>
          <p className="post-body">{post.icerik}</p>
        </div>
      ))}
    </div>
  );
}

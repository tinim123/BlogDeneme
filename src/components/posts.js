import React from "react";
import "../App.css";
import Db from "../db.json";
import { useState } from "react";

export default function Posts() {
  const postArray = [];
  Object.keys(Db).map((key) => {
    postArray.push(Db[key]);
  });

  const [posts] = useState(postArray);

  console.log(postArray);

  return (
    <div className="postlar">
      {posts.map((post, key) => (
        <div className="post-place" key={key}>
          <div className="post-header">
            <p>{post.baslik}</p>
          </div>
          <div className="post-sector">
            <p>{post.icerik}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

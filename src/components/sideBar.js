import React from "react";
import Db from "../db.json";
import { useState } from "react";



export default function SideBar() {
  const postArray = [];
  // eslint-disable-next-line array-callback-return
  Object.keys(Db).map((data) => {
    if (postArray.length <= 4) {
      postArray.push(Db[data]);
    }
  });
  const [posts] = useState(postArray);


  return (
    <>
      <aside className="sidebar">
        <h2>Son Yazılar</h2>
        {posts.map((post, id) => (
          <div className="side-content" key={id}>
            <h4>{post.baslik}</h4>
            <p>{post.icerik}</p>
          </div>
        ))}
      </aside>
    </>
  );
}

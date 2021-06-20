import React from "react";
import "../App.css";

export default function Menu() {

  return (
    <div className="menu">
      <p className="baslik1"><a target="_blink" href="/">Home</a></p>
      <p onClick={()=>{}} className="baslik"><a href="/about">About</a></p>
      <p onClick={()=>{}} className="baslik"><a target="_blink" href="https://facebook.com">Facebook</a></p>
      <p onClick={()=>{}} className="baslik"><a target="_blink" href="https://instagram.com">Instagram</a></p>
      <p onClick={()=>{}} className="baslik"><a target="_blink" href="https://twitter.com">Twitter</a></p>
      <p onClick={()=>{}} className="baslik"><a target="_blink" href="https://github.com">Github</a></p>
      <p onClick={()=>{}} className="baslik"><a href="/contact">Contact</a></p>
    </div>
  );
}

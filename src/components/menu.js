import React from "react";
import "../App.css";

export default function Menu() {


  return (
    <div className="menu">
      <a target="_blink" href="/">
        Anasayfa
      </a>
      <a target="_blink" href="https://facebook.com">
        Facebook
      </a>
      <a target="_blink" href="https://instagram.com">
        Instagram
      </a>
      <a target="_blink" href="https://twitter.com">
        Twitter
      </a>
      <a target="_blink" href="https://github.com">
        Github
      </a>
      <a href="/about">Hakkımda</a>
      <a href="/contact">İletişim</a>
      
    </div>
  );
}

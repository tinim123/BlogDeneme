import React from "react";

export default function BottomMenu() {
  return (
    <div className="bottom-menu-space">
      <div className="bottom-menu">
        <p className="baslik1"> Hasan Ali YILDIR</p>
        <p className="baslik">
          <a href="/about">About</a>
        </p>
        <p className="baslik">
          <a target="_blink" href="https://facebook.com">
            Facebook
          </a>
        </p>
        <p className="baslik">
          <a target="_blink" href="https://instagram.com">
            Instagram
          </a>
        </p>
        <p className="baslik">
          <a target="_blink" href="https://twitter.com">
            Twitter
          </a>
        </p>
        <p className="baslik">
          <a target="_blink" href="https://github.com">
            Github
          </a>
        </p>
        <p className="baslik">
          <a href="/contact">Contact</a>
        </p>
      </div>
    </div>
  );
}

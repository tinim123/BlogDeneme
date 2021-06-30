import React from "react";
import "../App.css";
import { auth, provider } from "../hooks/useAuth";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Auth() {
  const [user] = useAuthState(auth);

  const submit = () => {
    auth.signInWithPopup(provider).catch(alert);
  };

  if (!user) {
    return (
      <div className="github-sign" onClick={submit}>
        <p>Github İle</p>
        <p>Giriş Yapın</p>
        
      </div>
    );
  }

  const currentUser = () => {
    return (
      <div className="cikis-yap" onClick={()=>auth.signOut()}>
        <p>Hoşgeldin!</p>
        <p>{auth.currentUser.displayName}</p>
        <a href="#">Sign-out</a>
      </div>
    );
  };

  return <div className="github-sign">{user?currentUser():submit()}</div>;
}

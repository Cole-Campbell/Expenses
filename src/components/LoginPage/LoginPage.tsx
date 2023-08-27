import React, { useState } from "react";
import { PageViewLayout } from "../PageViewLayout/PageViewLayout";
import { signInWithEmailAndPassword, signOut } from "@firebase/auth";
import { auth } from "../../services/firestore";
import { useUserContext } from "../../context/UserContext";

export const LoginPage = () => {
  const { user } = useUserContext();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const attemptLogin = async (e: any) => {
    e.preventDefault();
    await signInWithEmailAndPassword(auth, username, password)
      .then((userCredential) => {
        console.log("loggedIn", userCredential);
      })
      .catch((err) => {
        console.log(err.code, err.message);
      });
  };
  return (
    <PageViewLayout title="Login">
      {user && <>Welcome {JSON.stringify(user) || ""}</>}
      <button onClick={() => signOut(auth)}>Logout</button>
      <form>
        <div>
          <label>Username</label>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="email"
            required
          />
        </div>
        <label>Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          required
        />
        <button onClick={attemptLogin}>Login</button>
      </form>
    </PageViewLayout>
  );
};

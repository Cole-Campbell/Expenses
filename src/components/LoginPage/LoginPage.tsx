import React, { useState } from "react";
import { PageViewLayout } from "../PageViewLayout/PageViewLayout";
import { signInWithEmailAndPassword } from "@firebase/auth";
import { auth } from "../../services/fireBase";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const attemptLogin = async (e: any) => {
    e.preventDefault();
    await signInWithEmailAndPassword(auth, username, password)
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        console.log(err.code, err.message);
      });
  };
  return (
    <PageViewLayout title="Login">
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

import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../utilities/api/context";
import { auth } from "../utilities/api/firebase";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();
  const { setIsUserIn } = useContext(Context);

  const handleLogin = async () => {
    await signInWithEmailAndPassword(auth, email, password);
    setIsUserIn(true);
    navigate("/main");
  };

  return (
    <div className="login">
      <div className="login-form">
        <input
          type="email"
          onChange={(event) => setEmail(event?.target.value)}
          className="login-input"
          placeholder="Email"
        />

        <input
          type="password"
          onChange={(event) => setPassword(event?.target.value)}
          className="login-input"
          placeholder="Password"
        />

        <button className="login-button" onClick={() => handleLogin()}>
          Login
        </button>

        <div
          style={{
            height: "25%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
          }}
        >
          <h5 style={{ color: "white" }}>or</h5>

          <Link to="/main" style={{ textDecoration: "none" }}>
            <h3 style={{ color: "orange" }}>Continue without login</h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;

import { signOut } from "firebase/auth";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../utilities/api/context";
import { auth } from "../utilities/api/firebase";

const Navbar = () => {
  const { isUserIn, setIsUserIn } = useContext(Context);

  return (
    <div className="navbar">
      <Link to={"/main"} style={{ textDecoration: "none" }}>
        <h3 className="navbar-title"> MoviePort </h3>
      </Link>
      <div className="navbar-section">
        {isUserIn ? (
          <div style={{ display: "flex" }}>
            <Link to={"/main"} style={{ textDecoration: "none" }}>
              <h3 className="navbar-title">Test User</h3>
            </Link>
            <h3
              className="navbar-sign"
              onClick={() => {
                signOut(auth);
                setIsUserIn(false);
              }}
            >
              Sign Out
            </h3>
          </div>
        ) : (
          <Link to={"/"} style={{ textDecoration: "none", fontWeight: "900" }}>
            <h3 className="navbar-sign" style={{ color: "rgb(255,165,0)", margin: "0" }}>
              Sign In
            </h3>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;

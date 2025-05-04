import React from "react";
import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

const NavBar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleClick = () => {
    logout();
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark p-2 text-white">
        <div className="container-fluid text-white">
        <Link className="navbar-brand text-white" to="/">
        TANMAY</Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse text-white"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-white">
              <li className="nav-item text-white">
                <Link
                  className="nav-link active text-white"
                  aria-current="page"
                  to="/"
                >
                  HOME
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active text-white"
                  aria-current="page"
                  to="/products"
                >
                  ALL PRODUCTS
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active text-white"
                  aria-current="page"
                  to="/about us"
                >
                 ABOUT US
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active text-white"
                  aria-current="page"
                  to="/contact"
                >
                  CONTACT US
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active text-white"
                 to="/teatypes">
                TEA TYPES
                </Link>
              </li>
            
              {user &&         
               <li className="nav-item">
                <Link className="nav-link active text-white" 
                to="/registerbook">
                  ORDER NOW
                </Link>
              </li>}
            </ul>
            <div className="d-flex">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-white">
                {user && (
                  <>
                    <li className="nav-item">
                      <Link
                        className="nav-link active text-white me-2"
                        aria-current="page"
                        to="/Profile"
                      >
                        {user.email}
                      </Link>
                    </li>
      
                    <li className="nav-item">
                      <button
                        className="btn btn-warning text-white"
                        onClick={logout}
                      >
                        Logout
                      </button>
                    </li>
                  </>
                )}

                {!user && (
                  <>
                    {" "}
                    <li className="nav-item">
                      <Link
                        className="btn btn-warning text-white me-2"
                        aria-current="page"
                        to="/login"
                      >
                        Login
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="btn btn-warning text-white" to="/signup">
                        Sign Up
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;

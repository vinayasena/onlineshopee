import React, { useContext } from "react";
import Link from "next/link";
import { DataContext } from "../store/GlobalsState";

function NavBar() {
  const { state, dispatch } = useContext(DataContext);
  const { cart } = state;

  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor:' #e3f2fd'}}>
      <Link href="/">
        <a className="navbar-brand text-uppercase font-weight-bolder">
          Online Shoppe
        </a>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarNavDropdown"
      >
        <ul className="navbar-nav p-1">
          <li className="nav-item">
            <Link href="/cart">
              <a className={"nav-link"}>
                Shopping cart
                <i
                  className="fas fa-shopping-cart position-relative"
                  aria-hidden="true"
                  style={{ marginLeft: "10px" }}
                >
                  <span
                    className="position-absolute"
                    style={{
                      padding: "3px 6px",
                      background: "#ed143dc2",
                      borderRadius: "50%",
                      top: "-10px",
                      right: "-10px",
                      color: "white",
                      fontSize: "14px",
                    }}
                  >
                    {cart.length}
                  </span>
                </i>
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/signin">
              <a className={"nav-link"}>
              Login
                <i className="fas fa-user" aria-hidden="true" style={{marginLeft:'10px'}}></i> 
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;

import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isClick, setIsClick] = useState(false);

  return (
    <>
      <div className="area">
        <header className="header">
          <div className="header_logo">
            <h1>CINEMAS</h1>
          </div>
          <div className="header_nav">
            <ul>
              <li>
                <Link>Mua ve</Link>
              </li>
              <li>
                <Link>Phim</Link>
              </li>
              <li>
                <Link>Su kien</Link>
              </li>
              <li>
                <Link>Rap</Link>
              </li>
            </ul>
          </div>
          <div className="header_func">
            <div className="header_func_search">
              <input
                type="text"
                style={{ display: isClick ? "block" : "none" }}
              />
              <button onClick={() => setIsClick(!isClick)}>Search</button>
            </div>
            <button style={{ width: "50%" }}>Dang nhap</button>
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;

import React, { useState, useEffect } from "react";
import Logo from "../../image/Logo.png";
import Icon from "../../image/Icon.png";
import Avatar from "../../image/Avatar.png";
import { useHistory } from "react-router-dom";
import { HiOutlineSearch } from "react-icons/hi";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaBell } from "react-icons/fa";
import "./Nav.css";

export default function Nav({ setSearchApi }) {
  const [show, handleShow] = useState(false);
  const history = useHistory();
  const [search, setSearch] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll", {});
    };
  }, []);

  function handleInputChange(e) {
    e.preventDefault();
    setSearch(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSearchApi(search);
    history.push("/search");
  }

  function handleClick(e) {
    e.preventDefault();
    setSearch("");
  }

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__container">
        <img
          src={Logo}
          alt="NETFLIX"
          className="nav__icon"
          onClick={() => history.push("/")}
        />
        <img
          src={Icon}
          alt="NETFLIX"
          className="nav__icon-res"
          onClick={() => history.push("/")}
        />

        <button
          onClick={() => history.push("/")}
          className="nav__buttons nav__buttons-delete"
        >
          Home
        </button>
        <button className="nav__buttons">TV Shows</button>
        <button className="nav__buttons">Movies</button>
        <button className="nav__buttons nav__buttons-delete">
          New & Popular
        </button>
        <button className="nav__buttons">My List</button>
        <button className="nav__buttons nav__buttons-delete">
          Watch Again
        </button>
      </div>

      <div className="nav__search nav__search-delete">
        <form onSubmit={(e) => handleSubmit(e)} className="nav__form">
          <button type="submit" className="nav__search-buttons">
            <HiOutlineSearch />
          </button>
          <input
            type="text"
            placeholder="Seach..."
            value={search}
            name="seach"
            onChange={handleInputChange}
          />
          <button
            onClick={(e) => handleClick(e)}
            className="nav__search-buttons"
          >
            X
          </button>
        </form>
        <FaBell />
        <img src={Avatar} alt="Avatar" className="nav__avatar" />
        <IoMdArrowDropdown />
      </div>
    </div>
  );
}

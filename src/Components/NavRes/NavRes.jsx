import React from "react";
import { CgHome } from "react-icons/cg";
import { HiOutlineSearch } from "react-icons/hi";
import { BsPlayBtn } from "react-icons/bs";
import { AiOutlineDownload, AiOutlineMenu } from "react-icons/ai";
import "./NavRes.css";
import { useHistory } from "react-router-dom";

export default function NavRes() {
  const history = useHistory();

  return (
    <div className="navRes">
      <div className="navRes__button" onClick={() => history.push("/")}>
        <CgHome />
        <p>Home</p>
      </div>
      <div className="navRes__button" onClick={() => history.push("/search")}>
        <HiOutlineSearch />
        <p>Search</p>
      </div>
      <div className="navRes__button">
        <BsPlayBtn />
        <p>Coming Soon</p>
      </div>
      <div className="navRes__button">
        <AiOutlineDownload />
        <p>Download</p>
      </div>
      <div className="navRes__button">
        <AiOutlineMenu />
        <p>Menu</p>
      </div>
    </div>
  );
}

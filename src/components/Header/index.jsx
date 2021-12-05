
import React from "react";
import "./Header.css";
import PersonIcon from "@material-ui/icons/Person";
import ForumIcon from "@material-ui/icons/Forum";
import IconButton from "@material-ui/core/IconButton";
import { Link, useNavigate } from "react-router-dom";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import appIcon from 'assets/app-icon.png'

const Header = ({ backButton }) => {
  const navigate = useNavigate();
  return (
    <div className="header">
      {backButton ? (
        <IconButton onClick={() => navigate(backButton)}>
          <ArrowBackIosIcon fontSize="large" className="header__icon" />
        </IconButton>
      ) : (
        <IconButton>
          <PersonIcon className="header__icon" fontSize="large" />
        </IconButton>
      )}

      <Link to="/">
        <img
          className="header__logo"
          src={appIcon}
          alt="app logo"
        />
      </Link>
      <Link to="/chat">
        <IconButton>
          <ForumIcon className="header__icon" fontSize="large" />
        </IconButton>
      </Link>
    </div>
  );
};

export default Header;

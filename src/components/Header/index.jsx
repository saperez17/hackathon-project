import React, { useState } from "react";
import "./Header.css";
import PersonIcon from "@material-ui/icons/Person";
import ForumIcon from "@material-ui/icons/Forum";
import IconButton from "@material-ui/core/IconButton";
import { Link, useNavigate } from "react-router-dom";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import appIcon from "assets/app-icon.png";
import { Drawer } from "antd";
import { isMobile } from "react-device-detect";
import useAuthContext from "hooks/useAuthContext";

const DrawerTitle = ({ title }) => {
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <PersonIcon className="header__icon" fontSize="large" />
      <p>{title}</p>
    </div>
  );
};

const Header = ({ backButton }) => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const [userState] = useAuthContext();
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  return (
    <>
      <div className="header">
        {backButton ? (
          <IconButton onClick={() => navigate(backButton)}>
            <ArrowBackIosIcon fontSize="large" className="header__icon" />
          </IconButton>
        ) : (
          <IconButton onClick={showDrawer}>
            <PersonIcon className="header__icon" fontSize="large" />
          </IconButton>
        )}

        <Link to="/">
          <img className="header__logo" src={appIcon} alt="app logo" />
        </Link>
        <Link to="/chat">
          <IconButton>
            <ForumIcon className="header__icon" fontSize="large" />
          </IconButton>
        </Link>
      </div>
      <Drawer
        title={<DrawerTitle title={userState.user.name} />}
        placement="right"
        onClose={onClose}
        visible={visible}
        getContainer={false}
      >
        <div
          style={{
            paddingLeft: isMobile ? "3rem" : "0rem",
          }}
        >
          <ul>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>

            <li>Servicios</li>
          </ul>
        </div>
      </Drawer>
    </>
  );
};

export default Header;

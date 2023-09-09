import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, IconButton, Stack, Toolbar, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import React from "react";

import { useNavigate } from "react-router-dom";

import AdmanAvavtar from "../../assets/images/AdmanAvatar.png";

import classes from "./Header.module.css";
import ProfileIcon from "../../assets/icons/ProfileIcon";
import LogoutIcon from '@mui/icons-material/Logout';
import { getAuth } from "firebase/auth";

const Header = ({name}) => {
  const navigate = useNavigate();





  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleprofile = () => {
    setAnchorEl(null);
    navigate("/profile");
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    

    navigate("/");
  };

  return (
    <AppBar
      position="fixed"
      color="transparent"
      className="color"
      sx={{
        boxShadow: "none",
        fontSize: "1.6rem",
        height: "7rem",
        background: "#fff",
      }}
    >
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="logo">
         
        </IconButton>
        <Typography
          variant="h2"
          component="div"
          sx={{
            flexGrow: 1,
            fontWeight: "700",
            fontSize: "2.4rem",
            display: "flex",
            alignItems: "center",
          }}
        >
          Task Management
        
        </Typography>
        <Stack direction="row" spacing={2}>
          <div className={classes.card__admin}>
            {/* <img src={AdmanAvavtar} alt="Adman Avatar" /> */}
            <div className={classes.admin__data}>
              <p>Welcome back</p>
              <h2>
                {name ? name: "profile"}
              </h2>
            </div>

            <div>
              <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <ExpandMoreIcon
                  fontSize="large"
                  sx={{
                    color: " #374151",
                    opacity: ".5",
                    fontSize: "2.5rem",
                  }}
                />
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem sx={{ fontSize: "1.6rem" }} onClick={handleprofile}>
                  <div className={classes.menu__item}>
                    <ProfileIcon />
                    <p>Profile</p>
                  </div>
                </MenuItem>
                <MenuItem sx={{ fontSize: "1.6rem" }} onClick={handleLogout}>
                  <div className={classes.menu__item}>
                  <LogoutIcon />
                    <p>Logout</p>
                  </div>
                </MenuItem>
              </Menu>
            </div>
          </div>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

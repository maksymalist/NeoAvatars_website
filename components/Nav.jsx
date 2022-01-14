import { useState } from "react";
import styles from "../styles/Nav.module.css";
import Link from "next/link";
import Image from "next/image";
import { Menu, MenuItem, useMediaQuery } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Nav = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const matches = useMediaQuery("(max-width:600px)");

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <div
      className={styles.nav}
      style={
        matches
          ? {
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }
          : {}
      }
    >
      <div className={styles.leftLinks}>
        <li className={styles.liMargin}>
          <Link href="https://neoavatars.vercel.app/" passHref>
            <a className={styles.link}>HOME</a>
          </Link>
        </li>
        {!matches && (
          <>
            <li className={styles.liMargin}>
              <Link href="https://neoavatars.vercel.app/" passHref>
                <a className={styles.link}>ABOUT</a>
              </Link>
            </li>
            <li className={styles.liMargin}>
              <Link href="https://neoavatars.vercel.app/" passHref>
                <a className={styles.link}>CONTACT</a>
              </Link>
            </li>
          </>
        )}
      </div>
      {matches ? (
        <div className={styles.rightLinks}>
          <a>
            <MenuIcon
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
              width={50}
              height={50}
              style={{ width: "40px", height: "40px" }}
            />
          </a>
          <div>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
              style={{
                width: "120px",
              }}
            >
              <MenuItem>ABOUT</MenuItem>
              <MenuItem>CONTACTS</MenuItem>
            </Menu>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Nav;

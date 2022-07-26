/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { AppBar, Button, Container } from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";

const Navbar = ({ children }) => {
  return (
    <span
      css={css`
        height: 100vh;
        width: 100vw;
      `}
    >
      <AppBar
        css={css`
          display: flex;
          flex-direction: column;
          align-items: center;
        `}
        position="static"
      >
        <Container css={css`display: flex; justify-content: center;`}>
          <Button
            variant="text"
            css={css`
              color: black;
              text-decoration: none;
              text-transform: none;
              line-height: 19.5px;
              font-size: 16px;
              font-weight: 400;
              max-width: 12vw;
            `}
            component={Link}
            to={"/"}
          >
            Home
          </Button>
          <Button
            variant="text"
            css={css`
              color: black;
              text-decoration: none;
              text-transform: none;
              line-height: 19.5px;
              font-size: 16px;
              font-weight: 400;
              max-width: 12vw;
            `}
            component={Link}
            to={"/new-recipe"}
          >
            New Recipe
          </Button>
        </Container>
      </AppBar>
      <span
        css={css`
          margin-top: 20vh;
          padding: 12px;
        `}
      >
        {children}
      </span>
    </span>
  );
};

export default Navbar;

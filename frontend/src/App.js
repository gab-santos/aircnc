import React from "react";

import logo from "./assets/logo.svg";

import Routes from "./routes";

import { GlobalStyle, Container, Content } from "./styles/global";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <img src={logo} alt="Logo AirCnC" onClick={() => {}} />
        <Content>
          <Routes />
        </Content>
      </Container>
    </>
  );
}

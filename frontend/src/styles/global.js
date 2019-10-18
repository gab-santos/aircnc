import styled, { createGlobalStyle } from "styled-components";

import img from "../assets/background.jpg";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    min-height: 100%;
  }

  body, input, button {
    @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');
    font-family: 'Roboto', Arial, Helvetica, sans-serif
  }

  body {
    font-size: 14px;

    background: #000 url(${img}) no-repeat;
    background-size: cover;

    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased !important
  }
`;

export const Container = styled.div`
  margin: 80px auto;
  max-width: 450px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  background: #fff;
  margin-top: 50px;
  border-radius: 4px;
  padding: 30px;
`;

export const Button = styled.button`
  border: 0;
  border-radius: 2px;
  width: 100%;
  height: 42px;
  padding: 0 20px;
  font-size: 16px;
  font-weight: bold;
  background: #f05a5b;
  color: #fff;
  cursor: pointer;

  :hover {
    background: #e14f50;
  }
`;

import styled from "styled-components";
import {
  Form as form,
  Label as label,
  Input as input,
  Button as button
} from "../Login/styles";

import { Link } from "react-router-dom";

export const Form = styled(form)``;

export const Thumbnail = styled.label`
  margin-bottom: 20px;
  border: ${props => !props.img && "1px dashed #ddd"};
  background-size: cover;
  cursor: pointer;
  height: 160px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-image: url(${props => props.img});
`;

export const File = styled.input`
  display: none;
`;

export const Img = styled.img`
  display: ${props => props.img && "none"};
  width: 50px;
`;

export const Label = styled(label)``;

export const Span = styled.span`
  font-weight: normal;
  color: #999;
  font-size: 12px;
`;

export const Input = styled(input)``;

export const Button = styled(button)``;

export const Back = styled(Link)`
  align-self: center;
  font-size: 15px;
  margin-top: 10px;
`;

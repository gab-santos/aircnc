import styled from "styled-components";
import { Button as button } from "../../styles/global";
import { Link as link } from "react-router-dom";

export const NotificationList = styled.ul`
  margin-bottom: 15px;
  list-style: none;
`;

export const Notification = styled.li`
  line-height: 24px;
  font-size: 16px;
`;

export const AcceptButton = styled.button`
  margin-right: 10px;
  margin-top: 10px;
  border: 0;
  font-weight: bold;
  background: transparent;
  color: #84c870;
  cursor: pointer;
`;

export const AcceptReject = styled(AcceptButton)`
  color: #e55e5e;
`;

/////////////////////////////////////////////////////////////////////////////////////

export const SpotList = styled.ul`
  width: 100%;
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  margin-bottom: 30px;
`;

export const Spot = styled.li`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  width: 100%;
  height: 120px;
  background-image: url(${props => props.img});
  background-size: cover;
  border-radius: 4px;
`;

export const Title = styled.strong`
  margin-top: 10px;
  font-size: 24px;
  color: #444;
`;

export const Price = styled.span`
  font-size: 15px;
  color: #999;
`;

export const Link = styled(link)``;

export const Button = styled(button)``;

export const Exit = styled.button`
  width: 100%;
  justify-self: center;
  font-size: 15px;
  margin-top: 10px;
  text-decoration: underline;

  border: 0;
  background: transparent;
  cursor: pointer;
`;

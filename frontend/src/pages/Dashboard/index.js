import React, { useState, useEffect, useMemo } from "react";

import socket from "socket.io-client";

import api from "../../services/api";

import {
  NotificationList,
  Notification,
  AcceptButton,
  AcceptReject,
  SpotList,
  Spot,
  Header,
  Title,
  Price,
  Link,
  Button,
  Exit
} from "./styles";

export default function Dashboard({ history }) {
  const [spots, setSpots] = useState([]);
  const [requests, setRequests] = useState([]);
  let [loading, setLoading] = useState(true);

  const user_id = localStorage.getItem("@AirCnC:user");

  // Após o webUser fazer login, é enviado para o servidor o user_id ele para que
  // ele seja inserido na lista de connectedUsers.
  const io = useMemo(
    () =>
      socket("http://localhost:3000", {
        query: { user_id }
      }),
    [user_id]
  );

  function logout() {
    localStorage.removeItem("@AirCnC:user");
    history.push("/");
  }

  useEffect(() => {
    // Caso algum spot seja reservado o webUser recebe uma mensagem chamada
    // 'booking_request' contendo os dados da reserva.
    io.on("booking_request", data => setRequests([...requests, data]));
  }, [io, requests]);

  useEffect(() => {
    async function loadSpots() {
      const user_id = localStorage.getItem("@AirCnC:user");

      if (!user_id) return history.push("/");

      const response = await api.get("/dashboard", {
        headers: { user_id }
      });

      setSpots(response.data);
      setLoading(false);
    }
    loadSpots();
  }, [history]);

  async function handleAccept(id) {
    try {
      await api.post(`/booking/${id}/approvals`);
      setRequests(requests.filter(request => request._id !== id));
    } catch (error) {
      console.log("ERROR");
    }
  }

  async function handleReject(id) {
    try {
      await api.post(`/booking/${id}/rejections`);
      setRequests(requests.filter(request => request._id !== id));
    } catch (error) {
      console.log("ERROR");
    }
  }

  return loading ? (
    <h1>Loading...</h1>
  ) : (
      <>
        <NotificationList>
          {requests.map(request => (
            <Notification key={request._id}>
              <p>
                <strong>{request.user.email}</strong> está solicitando uma reserva
              em <strong>{request.spot.company}</strong> para a data:{" "}
                <strong>{request.date}</strong>.
            </p>
              <AcceptButton onClick={() => handleAccept(request._id)}>
                ACEITAR
            </AcceptButton>
              <AcceptReject onClick={() => handleReject(request._id)}>
                REJEITAR
            </AcceptReject>
            </Notification>
          ))}
        </NotificationList>

        <SpotList>
          {spots.map(spot => (
            <Spot key={spot._id}>
              <Header img={spot.thumbnail_url} />
              <Title>{spot.company}</Title>
              <Price>{spot.price ? `R$ ${spot.price}/dia` : "GRATUITO"}</Price>
            </Spot>
          ))}
        </SpotList>

        <Link to="/new">
          <Button>Cadastrar novo spot</Button>
        </Link>

        <Exit onClick={() => logout()}>Sair</Exit>
      </>
    );
}

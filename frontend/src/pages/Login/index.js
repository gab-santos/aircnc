import React, { useState, useEffect } from "react";

import api from "../../services/api";

import { Title, Form, Label, Input, Button } from "./styles";

export default function Login({ history }) {
  const [email, setEmail] = useState("");
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    const user_id = localStorage.getItem("@AirCnC:user");
    if (user_id) return history.push("/dashboard");
    setLoading(false);
  }, [history]);

  async function handleSubmit(e) {
    e.preventDefault();

    const response = await api.post("/sessions", { email });

    const { _id } = response.data;
    localStorage.setItem("@AirCnC:user", _id);
    history.push("/dashboard");
  }

  return loading ? (
    <h1>Loading...</h1>
  ) : (
    <>
      <Title>
        Ofereca <strong>spots</strong> para programadores e encontre{" "}
        <strong>talentos</strong> para sua empresa
      </Title>

      <Form onSubmit={handleSubmit}>
        <Label htmlFor="email">E-MAIL *</Label>
        <Input
          id="email"
          type="email"
          placeholder="Seu melhor e-mail"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <Button type="submit">Entrar</Button>
      </Form>
    </>
  );
}

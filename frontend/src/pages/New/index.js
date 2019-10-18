import React, { useState, useEffect, useMemo } from "react";
import api from "../../services/api";

import {
  Form,
  Thumbnail,
  File,
  Img,
  Label,
  Span,
  Input,
  Back,
  Button
} from "./styles";
import camera from "../../assets/camera.svg";

export default function New({ history }) {
  const [thumbnail, setThumbnail] = useState(null);
  const [company, setCompany] = useState("");
  const [techs, setTechs] = useState("");
  const [price, setPrice] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const user_id = localStorage.getItem("@AirCnC:user");
    if (!user_id) return history.push("/");
    setLoading(false);
  }, [history]);

  const preview = useMemo(() => {
    return thumbnail ? URL.createObjectURL(thumbnail) : null;
  }, [thumbnail]);

  async function handleSubmit(e) {
    e.preventDefault();
    const user_id = localStorage.getItem("@AirCnC:user");
    const data = new FormData();
    data.append("thumbnail", thumbnail);
    data.append("company", company);
    data.append("techs", techs);
    data.append("price", price);

    await api.post("/spots", data, {
      headers: { user_id }
    });

    history.push("/dashboard");
  }

  return loading ? (
    <h1>Loading...</h1>
  ) : (
    <Form onSubmit={handleSubmit}>
      <Thumbnail img={preview}>
        <File type="file" onChange={e => setThumbnail(e.target.files[0])} />
        <Img src={camera} img={preview} alt="Select image" />
      </Thumbnail>

      <Label htmlFor="company">EMPRESA *</Label>
      <Input
        id="company"
        placeholder="Sua empresa incrível"
        value={company}
        onChange={e => setCompany(e.target.value)}
      />
      <Label htmlFor="techs">
        TECNOLOGIAS *<Span>(separdas por vírgula)</Span>
      </Label>
      <Input
        id="techs"
        placeholder="Quais tecnologias usam?"
        value={techs}
        onChange={e => setTechs(e.target.value)}
      />
      <Label htmlFor="price">
        VALOR DA DIÁRIA *<Span>(em branco para gratuíto)</Span>
      </Label>
      <Input
        id="price"
        placeholder="Valor cobrado por dia"
        value={price}
        onChange={e => setPrice(e.target.value)}
      />

      <Button type="submit">Cadastrar</Button>
      <Back to="/dashboard">Voltar</Back>
    </Form>
  );
}

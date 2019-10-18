import React, { useState, useEffect } from "react";

import socket from "socket.io-client";

import {
  Alert,
  AsyncStorage,
  Image,
  ScrollView,
  SafeAreaView,
  TouchableOpacity
} from "react-native";

import SpotList from "../../components/SpotList";

import styles from "./styles";
import logo from "../../assets/logo.png";

export default function List({ navigation }) {
  const [techs, setTechs] = useState([]);

  useEffect(() => {
    AsyncStorage.getItem("@AirCnC:user").then(user_id => {
      const io = socket('http://localhost:3000', {
        query: { user_id }
      });

      io.on("booking_response", booking => {
        Alert.alert(
          `Sua reserva em ${booking.spot.company} em ${booking.date} foi ${
            booking.approved ? "APROVADA" : "REJEITADA"
          }!`
        );
      });
    });
  }, []);

  useEffect(() => {
    AsyncStorage.getItem("@AirCnC:techs").then(storageTechs => {
      const techsArr = storageTechs.split(",").map(tech => tech.trim());
      setTechs(techsArr);
    });
  }, []);

  async function logout() {
    await AsyncStorage.clear();
    navigation.navigate("Login");
  }

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={logout}>
        <Image style={styles.logo} source={logo} on />
      </TouchableOpacity>

      <ScrollView>
        {techs.map(tech => (
          <SpotList key={tech} tech={tech} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

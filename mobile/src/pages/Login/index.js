import React, { useState, useEffect } from "react";

import {
  AsyncStorage,
  Image,
  KeyboardAvoidingView,
  // Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";

import api from "../../services/api";

import styles from "./styles.js";
import logo from "../../assets/logo.png";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [techs, setTechs] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function verifyUser() {
      const user = await AsyncStorage.getItem("@AirCnC:user");
      setLoading(false);
      if (user) navigation.navigate("List");
    }
    verifyUser();
  }, []);

  async function handleSubmit() {
    try {
      const response = await api.post("/sessions", { email });

      const { _id } = response.data;

      await AsyncStorage.setItem("@AirCnC:user", _id);
      await AsyncStorage.setItem("@AirCnC:techs", techs);

      navigation.navigate("List");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
      // enabled={Platform.OS === "ios"}
    >
      {loading ? (
        <Text>Loaging...</Text>
      ) : (
        <>
          <Image source={logo} />

          <View style={styles.form}>
            <Text style={styles.label}>SEU E-MAIL *</Text>
            <TextInput
              style={styles.input}
              placeholder="Seu e-mail"
              placeholderTextColor="#999"
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              value={email}
              onChangeText={setEmail}
            />

            <Text style={styles.label}>TECNOLOGIAS *</Text>
            <TextInput
              style={styles.input}
              placeholder="Tecnologias de interesse"
              placeholderTextColor="#999"
              autoCapitalize="words"
              autoCorrect={false}
              value={techs}
              onChangeText={setTechs}
            />

            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
              <Text style={styles.buttonText}>Encontrar spots</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </KeyboardAvoidingView>
  );
}

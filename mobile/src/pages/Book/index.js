import React, { useState } from "react";

import {
  Alert,
  AsyncStorage,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity
} from "react-native";

import api from "../../services/api";

import styles from "./styles";

export default function Book({ navigation }) {
  const [date, setDate] = useState("");
  const id = navigation.getParam("id");

  async function handleSubmit() {
    try {
      const user_id = await AsyncStorage.getItem("@AirCnC:user");

      await api.post(
        `/spots/${id}/bookings`,
        { date },
        {
          headers: { user_id }
        }
      );

      Alert.alert("Solicitação de reserva enviada.");

      navigation.navigate("List");
    } catch (error) {
      console.log("ERROR");
    }
  }

  async function handleCancel() {
    navigation.navigate("List");
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.label}>DATA DE INTERESSE *</Text>
      <TextInput
        style={styles.input}
        placeholder="Qual data você quer reservar?"
        placeholderTextColor="#999"
        autoCapitalize="words"
        autoCorrect={false}
        value={date}
        onChangeText={setDate}
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Solicitar reserva</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.cancelButton]}
        onPress={handleCancel}
      >
        <Text style={styles.buttonText}>Cancelar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

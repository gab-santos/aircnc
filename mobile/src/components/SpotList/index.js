import React, { useState, useEffect } from "react";

import { withNavigation } from "react-navigation";

import { Image, FlatList, Text, TouchableOpacity, View } from "react-native";

import api from "../../services/api";

import styles from "./styles";
import logo from "../../assets/logo.png";

export default withNavigation(function SpotList({ tech, navigation }) {
  const [spots, setSpots] = useState([]);

  useEffect(() => {
    async function loadSpots() {
      try {
        const response = await api.get("/spots", {
          params: { tech }
        });

        setSpots(response.data);
      } catch (error) {
        console.log("ERROR");
      }
    }
    loadSpots();
  }, []);

  function handleNavigation(id) {
    navigation.navigate("Book", { id });
  }

  function Item({ item }) {
    return (
      <View style={styles.listItem}>
        <Image style={styles.thumbnail} source={{ uri: item.thumbnail_url }} />
        <Text style={styles.company}>{item.company}</Text>
        <Text style={styles.price}>
          {item.price ? `R$ ${item.price}/dia` : "GRATUITO"}
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleNavigation(item._id)}
        >
          <Text style={styles.buttonText}>Solicitar reserva</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Empresas que usam <Text style={styles.bold}>{tech}</Text>
      </Text>

      <FlatList
        style={styles.list}
        data={spots}
        keyExtractor={spot => spot._id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <Item item={item} />}
      />
    </View>
  );
});

import { StyleSheet } from "react-native";

export default StyleSheet.create({
  continer: {
    marginTop: 30
  },

  title: {
    marginBottom: 15,
    fontSize: 20,
    paddingHorizontal: 20,
    color: "#444"
  },

  bold: {
    fontWeight: "bold"
  },

  list: {
    paddingHorizontal: 20,
    marginBottom: 20
  },

  listItem: {
    marginRight: 15
  },

  thumbnail: {
    height: 120,
    width: 200,
    resizeMode: "cover",
    borderRadius: 2
  },

  company: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginTop: 10
  },

  price: {
    fontSize: 15,
    color: "#999",
    marginTop: 5
  },

  button: {
    height: 32,
    marginTop: 15,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 2,
    backgroundColor: "#f05a5b"
  },

  buttonText: {
    fontWeight: "bold",
    fontSize: 15,
    color: "#fff"
  }
});

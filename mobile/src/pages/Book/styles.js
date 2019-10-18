import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    margin: 30
  },

  label: {
    fontWeight: "bold",
    color: "#444",
    marginBottom: 8,
    marginTop: 30
  },

  input: {
    height: 44,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 2,
    paddingHorizontal: 20,
    marginBottom: 20,
    fontSize: 16,
    color: "#444"
  },

  button: {
    height: 42,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 2,
    backgroundColor: "#f05a5b"
  },

  cancelButton: {
    backgroundColor: "#ccc",
    marginTop: 10
  },

  buttonText: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#fff"
  }
});

import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  form: {
    alignSelf: "stretch",
    paddingHorizontal: 30,
    marginTop: 30
  },

  label: {
    fontWeight: "bold",
    color: "#444",
    marginBottom: 8
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

  buttonText: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#fff"
  }
});

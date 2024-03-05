import React from "react";
import {
  TextInput,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";

function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mis tareas por hacer</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Agregar una nueva tarea"
          style={styles.textInput}
        />
        <TouchableOpacity style={styles.addButton}>
          <Text>Agregar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 20,
  },
  title: {
    fontSize: 20,
    color: "#6f6f6f",
  },
  text: {
    fontSize: 16,
    color: "#6f6f6f",
  },
  whiteText: {
    fontSize: 16,
    color: "#fff",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#6f6f6f",
    borderRadius: 10,
    padding: 10,
    width: Dimensions.get("screen").width * 0.2,
  },
  inputContainer: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  addButton: {
    width: Dimensions.get("screen").width * 0.06,
    backgroundColor: "#5897fb",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default App;

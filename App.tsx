import React from "react";
import {
  TextInput,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  FlatList,
} from "react-native";

function App() {
  function renderItem({ item }: { item: Task }) {
    return (
      <View style={styles.itemcontainer}>
        <Text style={styles.text}>{item.title}</Text>
      </View>
    );
  }
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
      <View style={styles.scrollContainer}>
        <FlatList data={Tasks} renderItem={renderItem} />
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
    width: Dimensions.get("screen").width * 0.17,
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
  scrollContainer: {},
  itemcontainer: {
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#6f6f6f",
  },
});

const Tasks = [
  {
    title: "Programar una app",
    done: false,
    Date: new Date(),
  },
  {
    title: "Estudiar react native",
    done: false,
    Date: new Date(),
  },
  {
    title: "Trabajar como programador",
    done: false,
    Date: new Date(),
  },
];

interface Task {
  title: string;
  done: boolean;
  Date: Date;
}

export default App;

import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const Calculator = () => {
  const [input, setInput] = useState<string>("");

  const handlePress = (value: string) => {
    if (value === "=") {
      try {
        setInput(eval(input).toString());
      } catch {
        setInput("Error");
      }
    } else if (value === "C") {
      setInput("");
    } else {
      setInput(input + value);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.display}
        value={input}
        editable={false}
        placeholder="0"
        placeholderTextColor="#ccc"
      />
      <View style={styles.buttonsContainer}>
        {[
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "0",
          "+",
          "-",
          "*",
          "/",
          "x*x",
          "√",
          "1/x",
          "Cos",
          "Sin",
          "Tan",
          "=",
          "C",
        ].map((btn, index) => (
          <TouchableOpacity
            key={index}
            style={styles.button}
            onPress={() => handlePress(btn)}
          >
            <Text style={styles.buttonText}>{btn}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  display: {
    height: 60,
    width: "100%",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 10,
    textAlign: "right",
    padding: 10,
    fontSize: 24,
    marginBottom: 20,
    backgroundColor: "#fff",
  },
  buttonsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  button: {
    width: "22%",
    height: 60,
    margin: "1%",
    backgroundColor: "#e0e0e0",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
});

export default Calculator;

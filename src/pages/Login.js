import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState, useContext } from "react";

import {AuthContext} from "../contexts/auth"

export default function Login() {

  const {singIn} = useContext(AuthContext)


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    singIn(email, password)
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Seja bem vindo(a)</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={(text) => setEmail(text)}
        placeholder="Digite seu email"
      />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={(text) => setPassword(text)}
        placeholder="Digite sua senha"
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Acessar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    marginBottom: 14,
    fontSize: 20,
  },
  input: {
    width: "90%",
    height: 45,
    backgroundColor: "#CCC",
    borderRadius: 4,
    marginBottom: 14,
    padding: 8,
  },
  button: {
    width: "90%",
    height: 45,
    backgroundColor: "#B0060E",
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 20,
    color: "#FFF",
  },
});

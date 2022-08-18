import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pagina Inicial</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Acessar Pedidos</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontSize: 25,
    marginBottom: 14,
  },
  button: {
    width: "80%",
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#B0060E",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 20,
  }
})
import { View, Text, StyleSheet } from 'react-native'
import React, {useContext} from 'react'

import {AuthContext} from "../contexts/auth"

export default function Pedidos() {

  const {user} = useContext(AuthContext)

  return (
    <View style={styles.container}>
      <Text>Pedidos</Text>
      <Text>Seu Email: {user.email}</Text>
      <Text>Você está ativo? {user.status ? "ATIVO" : "INATIVO"}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})
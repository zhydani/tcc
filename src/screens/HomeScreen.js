// import { FAB, Stack } from "@react-native-material/core";
// i'ld use fab but dont work and i dont know why
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const HomeScreen = () => {
  const handleButtonPress = () => {
    // Coloque aqui a lógica para obter a localização atual do usuário e enviar a mensagem para contatos pré-selecionados
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
        <Icon name="location-pin" size={40} color="white"/>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#FF5D8F',
    borderRadius: 50,
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 6,
  },
});

export default HomeScreen;

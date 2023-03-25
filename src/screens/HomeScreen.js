import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import HeaderComponent from "../components/HeaderComponent";

const HomeContent = () => {
  const handleButtonPress = () => {
    // here is the logic 
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
        <Icon name="location-pin" size={40} color="white"/>
      </TouchableOpacity>
    </View>
  );
};

function HomeScreen({navigation}) {

  return (
    <HeaderComponent subheader="Localização" content={<HomeContent />} navigation={navigation}/>
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
    width: 90,
    height: 90,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 6,
  },
});

export default HomeScreen;

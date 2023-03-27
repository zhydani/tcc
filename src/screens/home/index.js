import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import HeaderComponent from "../../components/HeaderComponent";
import styles from './Styles';

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

export default HomeScreen;

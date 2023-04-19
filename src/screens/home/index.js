import React, { useEffect } from 'react';
import { TouchableOpacity, View } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import Icon from 'react-native-vector-icons/MaterialIcons';
import HeaderComponent from "../../components/HeaderComponent";
import requestPermission from "../../utils/LocalizationPermission";
import styles from './Styles';

const HomeContent = () => {
  const handleButtonPress = async () => {
    // Obter as coordenadas de latitude e longitude do dispositivo
    Geolocation.getCurrentPosition(
      position => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        // Criar uma mensagem formatada com um link do Google Maps
        const message = `Socorro! Estou em perigo! Por favor, me ajude!\n\nMinha localização atual: https://www.google.com/maps/search/?api=1&query=${lat},${lon}`;

        // Abrir o aplicativo do WhatsApp e compartilhar a mensagem formatada
        // Linking.openURL(`whatsapp://send?text=${encodeURIComponent(message)}`);
        console.log(message)
      },
      error => alert(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  };

  useEffect(() => {
    requestPermission();
  }, []);

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

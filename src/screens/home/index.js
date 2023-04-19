import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import Icon from 'react-native-vector-icons/MaterialIcons';
import HeaderComponent from "../../components/HeaderComponent";
import Alert from '../../components/default/alert/Alert';
import requestPermission from "../../utils/LocalizationPermission";
import styles from './Styles';

const HomeContent = () => {

  // Alert 
  const [controlAlert, setControlAlert] = useState(false);
  const [labelAlert, setLabelAlert] = useState(null);
  const [iconAlert, setIconAlert] = useState(null);
  const [iconColorAlert, setIconColorAlert] = useState(null);
  
  useEffect(() => {
    requestPermission();
  }, []);
  
  const handleButtonPress = async () => {
    const contacts = await getSavedContacts();
    // Obter as coordenadas de latitude e longitude do dispositivo
    Geolocation.getCurrentPosition(
      position => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        // Criar uma mensagem formatada com um link do Google Maps
        const message = `Socorro! Estou em perigo. Minha localização é:\n\nMinha localização atual: https://www.google.com/maps/search/?api=1&query=${lat},${lon}`;

        // Abrir o aplicativo do WhatsApp e compartilhar a mensagem formatada
        const contactsWithPhone = contacts.filter((c) => c?.phoneNumbers && c?.phoneNumbers.length > 0);
        const numbers = contactsWithPhone.map((c) => c?.phoneNumbers[0].number);
        
        // Linking.openURL(`whatsapp://send?text=${encodeURIComponent(message)}&phone=${numbers.join(',')}`);
        console.log(message + " numeros enviados:  " + numbers.join(','))
        setLabelAlert('Mensagens Enviadas');
        setIconAlert('send');
        setIconColorAlert('#FF5D8F');
        setControlAlert(true);
      },
      error => alert(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  };

  async function getSavedContacts() {
    try {
      const contacts = await AsyncStorage.getItem('@contacts');
      if (contacts !== null) {
        return JSON.parse(contacts);
      }
      return [];
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  return (
    <>
      <Alert 
        controlAlert={controlAlert} 
        label={labelAlert}
        nameIcon={iconAlert}
        colorIcon={iconColorAlert}
        onPress={() => setControlAlert(!controlAlert)}
      />
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
          <Icon name="location-pin" size={40} color="white"/>
        </TouchableOpacity>
      </View>
    </>
  );
};

function HomeScreen({navigation}) {

  return (
    <HeaderComponent subheader="Localização" content={<HomeContent />} navigation={navigation}/>
  );
};

export default HomeScreen;

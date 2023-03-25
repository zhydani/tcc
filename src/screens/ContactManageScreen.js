import React from 'react';
import { StyleSheet, View } from 'react-native';
import HeaderComponent from "../components/HeaderComponent";

const ContactManageContent = () => {
  const handleButtonPress = () => {
    // here is the logic 
  };

  return (
    <View style={styles.container}>
    </View>
  );
};

function ContactManageScreen({navigation}) {

  return (
    <HeaderComponent subheader="Contatos" content={<ContactManageContent />} navigation={navigation}/>
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

export default ContactManageScreen;

// import React from 'react';
import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import HeaderComponent from "../components/HeaderComponent";
import requestContactsPermission from "../utils/ContactPermission";

function ContactManageContent() {

  useEffect(() => {
    requestContactsPermission();
  }, []);


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
  
});

export default ContactManageScreen;

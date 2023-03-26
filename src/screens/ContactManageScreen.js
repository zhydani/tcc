// import React from 'react';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Contacts from 'react-native-contacts';
import HeaderComponent from "../components/HeaderComponent";
import requestContactsPermission from "../utils/ContactPermission";

function ContactManageContent() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    requestContactsPermission();
    Contacts.getAll().then(contacts => {
      // console.log(contacts)
      setContacts(contacts)
    })
  }, []);

  return (
    <View>
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

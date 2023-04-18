import React, { useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import HeaderComponent from "../../components/HeaderComponent";
import ModalContacts from './ModalContacts';
import styles from './StylesIndex';

function ContactManageContent() {
  const [contacts, setContacts] = useState([]);

  const handleAddContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  const handleRemoveContact = (index) => {
    const newContacts = [...contacts];
    newContacts.splice(index, 1);
    setContacts(newContacts);
  };

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={contacts}
        renderItem={({ item, index }) => (
          <TouchableOpacity style={styles.contactItem} onPress={() => handleRemoveContact(index)}>
            <View style={styles.contactCon}>
              <View style={styles.imgCon}>
                  <View style={styles.placeholder}>
                  <Text style={styles.txt}>{item?.givenName[0]}</Text>
                  </View>
              </View>
              <View style={styles.contactDat}>
                  <Text style={styles.name}>
                  {item?.givenName} {item?.middleName && item.middleName + ' '}
                  {item?.familyName}
                  </Text>
                  <Text style={styles.phoneNumber}>
                  {item?.phoneNumbers[0]?.number}
                  </Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
        <ModalContacts onAddContact={handleAddContact} />
    </View>
  );
};

function ContactManageScreen({navigation}) {
  return (
    <HeaderComponent subheader="Contatos" content={<ContactManageContent />} navigation={navigation}/>
  );
};

export default ContactManageScreen;

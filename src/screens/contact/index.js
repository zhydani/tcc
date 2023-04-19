import React, { useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import HeaderComponent from "../../components/HeaderComponent";
import Alert from '../../components/default/alert/Alert';
import ListEmpty from '../../components/default/empty/ListEmpty';
import ModalContacts from './ModalContacts';
import styles from './StylesIndex';

function ContactManageContent() {
  const [contacts, setContacts] = useState([]);
  const [controlAlert, setControlAlert] = useState(false)
  const [labelAlert, setLabelAlert] = useState(null)

  const handleAddContact = (newContact) => {
    const contactExists = contacts.find(contact => contact.recordID === newContact.recordID);
    if (contactExists) {
      console.log('ja existe');
      setLabelAlert('Contato já cadastrado');
      setControlAlert(true);
      return;
    }
    setContacts([...contacts, newContact]);
  };

  const handleRemoveContact = (index) => {
    const newContacts = [...contacts];
    newContacts.splice(index, 1);
    setContacts(newContacts);
  };

  return (
    <View style={styles.container}>
      <Alert 
        controlAlert={controlAlert} 
        label={labelAlert}
        onPress={() => setControlAlert(!controlAlert)}
      />
      <FlatList
        style={styles.list}
        data={contacts}
        ListEmptyComponent={ () => {
            return <ListEmpty />
        }}
        renderItem={({ item, index }) => (
          <View style={styles.contactCon}>
            <View style={styles.contactGroup}>
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
            <TouchableOpacity style={styles.contactIcon} onPress={() => handleRemoveContact(index)}>
              <Icon name="trash" size={25} color="red"/>
            </TouchableOpacity>
          </View>
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

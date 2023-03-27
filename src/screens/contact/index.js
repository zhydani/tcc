// import React from 'react';
import React, { useEffect, useState } from 'react';
import { FlatList, Modal, Pressable, Text, TextInput, View } from 'react-native';
import Contacts from 'react-native-contacts';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import HeaderComponent from "../../components/HeaderComponent";
import requestContactsPermission from "../../utils/ContactPermission";
import styles from './Styles';

function ContactManageContent() {
  const [modalVisible, setModalVisible] = useState(false);
  const [contacts, setContacts] = useState([]);
  const [contactsList, setContactsList] = useState([]);

  useEffect(() => {
    requestContactsPermission();
  }, []);

  const openContactsModal = async () => {
    Contacts.getAll().then(contacts => {
      if (contacts.length > 0) {
        setContacts(contacts);
        setModalVisible(true);
      }
    })
  };

  const keyExtractor = (item, idx) => {
    return item?.recordID?.toString() || idx.toString();
  };

  const Contact = ({contact}) => {
    return (
      <View style={styles.contactCon}>
        <View style={styles.imgCon}>
          <View style={styles.placeholder}>
            <Text style={styles.txt}>{contact?.givenName[0]}</Text>
          </View>
        </View>
        <View style={styles.contactDat}>
          <Text style={styles.name}>
            {contact?.givenName} {contact?.middleName && contact.middleName + ' '}
            {contact?.familyName}
          </Text>
          <Text style={styles.phoneNumber}>
            {contact?.phoneNumbers[0]?.number}
          </Text>
        </View>
      </View>
    );
  };
  const renderItem = ({item, index}) => {
    return <Contact contact={item} />;
  };

  return (
    <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={openContactsModal}>
        <Text style={styles.textStyle}><Icon name="plus" size={18} color="white"/> Adicionar Contato</Text>
      </Pressable>
      {/* <Button title="Abrir contatos" onPress={openContactsModal} /> */}

      <Modal style={styles.centeredView} animationType="slide" visible={modalVisible} transparent>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.inputView}>
              <Ionicons name="search" size={20} color="#ccc" />
              <TextInput
                style={styles.input}
                // onChangeText={onChangeNumber}
                // value={number}
                placeholder="Buscar contato"
                keyboardType="default"
              />
            </View>
            <FlatList
              data={contacts}
              renderItem={renderItem}
              keyExtractor={keyExtractor}
              style={styles.list}
            />
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(false)}>
              <Text style={styles.textStyle}>Fechar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

function ContactManageScreen({navigation}) {

  return (
    <HeaderComponent subheader="Contatos" content={<ContactManageContent />} navigation={navigation}/>
  );
};


export default ContactManageScreen;

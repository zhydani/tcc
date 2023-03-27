// import React from 'react';
import React, { useEffect, useState } from 'react';
import { FlatList, Modal, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import Contacts from 'react-native-contacts';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import HeaderComponent from "../components/HeaderComponent";
import requestContactsPermission from "../utils/ContactPermission";

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

      <Modal style={styles.centeredView} animationType="slide" visible={modalVisible}>
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

const styles = StyleSheet.create({
  // lista
  list: {
    height: 310,
  },
  // item contato
  contactCon: {
    flex: 1,
    width: 500,
    flexDirection: 'row',
    padding: 5,
    borderBottomWidth: 0.5,
    borderBottomColor: '#d9d9d9',
  },
  imgCon: {},
  placeholder: {
    width: 40,
    height: 40,
    borderRadius: 30,
    overflow: 'hidden',
    backgroundColor: '#d9d9d9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contactDat: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 10,
  },
  txt: {
    fontSize: 18,
  },
  name: {
    fontSize: 16,
  },
  phoneNumber: {
    color: '#888',
  },
  // button open modal
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 4,
  },
  buttonOpen: {
    backgroundColor: '#FF5D8F',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  // input modal
  inputView: {
    flexDirection: 'row', 
    alignItems: 'center',
    paddingHorizontal: 10,
    height: 40,
    width: 230,
    margin: 12,
    borderWidth: 1,
    borderColor: "#FF5D8F",
    borderRadius: 50,
  },
  input: {
    height: 40,
    margin: 12,
    padding: 10,
  },

  // modal
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    width: 300,
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 30,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  buttonClose: {
    marginTop: 20,
    width: 100,
    backgroundColor: '#FF5D8F',
  },
});

export default ContactManageScreen;

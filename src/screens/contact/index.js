import React, { useState } from 'react';
import HeaderComponent from "../../components/HeaderComponent";
import ModalContacts from './ModalContacts';
// import styles from './Styles';

function ContactManageContent() {
  const [contactsList, setContactsList] = useState([]);

  return (
    <ModalContacts />
  );
};

function ContactManageScreen({navigation}) {
  return (
    <HeaderComponent subheader="Contatos" content={<ContactManageContent />} navigation={navigation}/>
  );
};

export default ContactManageScreen;

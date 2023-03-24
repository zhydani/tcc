import {
  AppBar, Backdrop,
  BackdropSubheader, IconButton, ListItem, Surface
} from "@react-native-material/core";
import { React, useState } from 'react';
import { StyleSheet, View } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from './src/screens/HomeScreen';

const App = () => {
  const [revealed, setRevealed] = useState(false);
  return (
    <Backdrop
      revealed={revealed}
      style={styles.header}
      header={
        <AppBar
          title="Ciclo Seguro"
          transparent
          leading={props => (
            <IconButton
              icon={props => (
                <Icon name={revealed ? "close" : "menu"} {...props} />
              )}
              onPress={() => setRevealed(prevState => !prevState)}
              {...props}
            />
          )}
        />
      }
      backLayer={
        <View style={styles.menu}>
          <ListItem
            style={styles.listItem}
            title="Contatos"
            leading={<Icon name="contacts" size={24} />}
            trailing={props => <Icon name="chevron-right" {...props} />}
          />
          <ListItem
            title="Contatos"
            leading={<Icon name="contacts" size={24} />}
            trailing={props => <Icon name="chevron-right" {...props} />}
          />
        </View>
      }
    >
      <BackdropSubheader title="Subheader" />
      <Surface style={styles.content}>
        <HomeScreen />
      </Surface>
    </Backdrop>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    padding: 16,
  },
  header: {
    backgroundColor: "#FF5D8F",
  },
  menu:{
    // height: 110,
    padding: 4
  },
  listItem:{
    backgroundColor: "#FF5D8F",
  }
});

export default App;

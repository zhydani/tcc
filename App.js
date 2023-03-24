import {
  AppBar,
  Backdrop,
  BackdropSubheader,
  Divider,
  IconButton,
  Surface
} from "@react-native-material/core";
import { React, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import IconSet from "react-native-vector-icons/Ionicons";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import HomeScreen from "./src/screens/HomeScreen";

const App = () => {
  const [revealed, setRevealed] = useState(false);
  return (
    <Backdrop
      revealed={revealed}
      style={styles.header}
      header={
        <SafeAreaView>
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
        </SafeAreaView>
      }
      backLayer={
        <View style={styles.menu}>
          <View style={styles.drawerContent}>
            <Text style={styles.drawerText}>Menu</Text>
            <View style={styles.menuItem}>
              <Icon name="contacts" size={24} color="white" />
              <Text style={styles.menuItemText}>Contatos</Text>
            </View>
            <Divider style={{ marginBottom: 10 }} leadingInset={45} />
            <View style={styles.menuItem}>
              <IconSet name="settings-sharp" size={24} color="white" />
              <Text style={styles.menuItemText}>Configurações</Text>
            </View>
          </View>
        </View>
      }
    >
      <BackdropSubheader title="Localização" />
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
    padding: 4
  },
  listItem:{
    backgroundColor: "#FF5D8F",
  },
  drawerContent: {
    padding: 16,
    backgroundColor: "#FF5D8F",
  },
  drawerText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: "white",
    marginBottom: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  menuItemText: {
    marginLeft: 16,
    fontSize: 16,
    color: "white",
  },
});

export default App;

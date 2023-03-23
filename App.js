import {
  AppBar, Backdrop,
  BackdropSubheader, IconButton, Surface
} from "@react-native-material/core";
import { createStackNavigator } from '@react-navigation/stack';
import { React, useState } from 'react';
import { StyleSheet, View } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from './src/screens/HomeScreen';

const Stack = createStackNavigator();

const App = () => {
  const [revealed, setRevealed] = useState(false);
  return (
    <Backdrop
      revealed={revealed}
      style={styles.header}
      header={
        <AppBar
          title="TCC"
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
      backLayer={<View style={{ height: 120 }} />}
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
  }
});

export default App;

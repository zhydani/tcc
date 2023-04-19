import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { React } from "react";
import { Provider } from 'react-redux';
import ContactManageScreen from "./src/screens/contact/index";
import HomeScreen from "./src/screens/home/index";
import store from "./src/store";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }} >
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="ContactManageScreen" component={ContactManageScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;

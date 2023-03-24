import { React } from "react";
import HeaderComponent from "./src/components/HeaderComponent";
import HomeScreen from "./src/screens/HomeScreen";

const App = () => {
  return (
    <HeaderComponent subheader="Localização" content={<HomeScreen />} />
  );
};

export default App;

import {
    AppBar,
    Backdrop,
    BackdropSubheader, IconButton,
    Surface
} from "@react-native-material/core";
import { React, useState } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import MenuComponent from "./MenuComponent";
  
function Header({ content, subheader }) {
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
            <MenuComponent />
        }
        >
        <BackdropSubheader title={subheader} />
        <Surface style={styles.content}>
            {content}
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
});

export default Header;
  
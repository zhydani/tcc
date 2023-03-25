import {
    Divider
} from "@react-native-material/core";
import { React } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import IconSet from "react-native-vector-icons/Ionicons";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

// import HomeScreen from "../screens/HomeScreen";
  
function Menu({ navigation }) {
    return (
        <View style={styles.menu}>
        <View style={styles.drawerContent}>
            <Text style={styles.drawerText}>Menu</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <View style={styles.menuItem}>
                    <Icon name="home" size={24} color="white" />
                    <Text style={styles.menuItemText}>Home</Text>
                </View>
            </TouchableOpacity>
            <Divider style={{ marginBottom: 10 }} leadingInset={45} />
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
    );
};

const styles = StyleSheet.create({
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

export default Menu;
  
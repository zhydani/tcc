import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 0,
        padding: 10,
        backgroundColor: '#fff',
    },
    // lista
    list: {
        height: 360,
    },
    // item contato
    contactCon: {
        flex: 1,
        width: 500,
        flexDirection: 'row',
        padding: 8,
        borderBottomWidth: 0.5,
        borderBottomColor: '#d9d9d9',
    },
    imgCon: {},
    placeholder: {
        width: 50,
        height: 50,
        borderRadius: 30,
        overflow: 'hidden',
        backgroundColor: '#d9d9d9',
        alignItems: 'center',
        justifyContent: 'center',
    },
    contactDat: {
        flex: 1,
        justifyContent: 'center',
        paddingLeft: 12,
    },
    txt: {
        fontSize: 22,
    },
    name: {
        fontSize: 18,
    },
    phoneNumber: {
        color: '#888',
    },
});

export default styles;
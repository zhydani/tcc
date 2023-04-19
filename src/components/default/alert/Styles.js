import { Dimensions, StyleSheet } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
    modal: {
        zIndex: 1000
    },
    container: {
        flex: 1,
        paddingBottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(160, 160, 160, 0.7)',
    },
    subContainer: {
        width: 189,
        height: 189,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        backgroundColor: 'white',
    },
    label: {
        color: 'black',
        textAlign: 'center',
        textAlignVertical: 'center',
        fontWeight: 'bold',
        fontSize: 20,
    },
    closeBtn: {
        position: 'absolute',
        right: 10,
        top: 10,
    },
});  

export default styles;
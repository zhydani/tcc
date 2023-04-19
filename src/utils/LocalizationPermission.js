import { PermissionsAndroid } from 'react-native';

async function requestPermission() {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Permissão de localização',
        message: 'Este aplicativo precisa de permissão de localização para funcionar corretamente.',
        buttonNeutral: 'Pergunte-me depois',
        buttonNegative: 'Cancelar',
        buttonPositive: 'OK',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('Permissão de localização concedida');
    } else {
      console.log('Permissão de localização negada');
    }
  } catch (err) {
    console.warn(err);
  }
}

export default requestPermission;
import { PermissionsAndroid } from 'react-native';

async function requestContactsPermission() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
        {
          title: 'Permissão de acesso aos contatos',
          message:
            'Este aplicativo precisa de permissão para acessar os seus contatos.',
          buttonNeutral: 'Perguntar depois',
          buttonNegative: 'Cancelar',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Permissão concedida');
      } else {
        console.log('Permissão negada');
      }
    } catch (err) {
      console.warn(err);
    }
  }

export default requestContactsPermission;
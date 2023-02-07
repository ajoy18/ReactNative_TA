import React, {useState} from 'react';
import {
  Image,
  Text,
  View,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';

// 1
// ini import function untuk menaruh data kedalam global variable
import { storeUser } from '../../redux/features/GlobalVariable';
// ini function tambahan untuk menaruh data kedalam variable, ini untuk mempassing data
import { useDispatch } from 'react-redux';
import url from '../../GlobalUrl';

function Login() {
  // 2
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const [nisn, setNisn] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async () => {
    if (nisn === '' || password === '') {
      Alert.alert('Perhatian!', 'NISN atau Password Tidak Boleh Kosong');
    }
    await getData();
  };

  async function getData() {
    var formData = new FormData();
    formData.append('nisn', nisn);
    formData.append('password', password);
    await axios
      .post(`${url}siswa/login_siswa.php`,
       formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          // 'Authorization' : 'Bearer '+data
        },
      })
      .then(res => {
        // console.log(res.data.data.nama)
        if (res.data.status_code === 405) {
          return Alert.alert('Warning', res.data.status_message);
        }
        if (res.data.status_code === 400) {
          return Alert.alert('Warning', res.data.status_message);
        }
        // setData(res.data.data)
        // 3
        dispatch(
          storeUser({
            id_user: res.data.data.id,
            nama_user: res.data.data.nama,
            nisn: res.data.data.nisn,
            token: res.data.token,
          })
        )
        navigation.navigate('Home');
      })
      .catch(err => console.log('err = ' + err));
  }

  return (
    <View style={{flex: 1, backgroundColor: '#FFF'}}>
      <StatusBar backgroundColor={'#FFF'} barStyle={'dark-content'} />
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
          flexDirection: 'column',
        }}>
        <Image
          source={require('../../images/img_akm.png')}
          style={{width: 300, height: 120}}
        />
        <Text
          style={{
            fontSize: 35,
            color: '#1C6758',
            marginTop: 8,
            fontFamily: 'Montserrat-ExtraBold',
          }}>
          Y A P E R A
        </Text>
        <TextInput
          placeholder="NISN"
          placeholderTextColor={'#1C6758'}
          onChangeText={value => setNisn(value)}
          value={nisn}
          style={Style.txtInput}
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor={'#1C6758'}
          onChangeText={value => setPassword(value)}
          value={password}
          secureTextEntry={true}
          style={Style.txtInput}
        />
        <TouchableOpacity onPress={() => handleSubmit()}>
          <View
            style={{
              backgroundColor: '#1C6758',
              borderRadius: 10,
              borderWidth: 2,
              marginTop: 20,
              width: 120,
              height: 50,
              padding: 10,
            }}>
            <Text style={{fontSize: 18, textAlign: 'center', color: '#FFF'}}>
              Masuk
            </Text>
          </View>
        </TouchableOpacity>

        <Text style={{fontWeight: 'bold', marginTop: 10, color: '#AFAFAF'}}>
          Belum verifikasi akun?
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Verifikasi')}>
          <Text
            style={{
              fontWeight: 'bold',
              color: '#1C6758',
              marginTop: 5,
              fontSize: 20,
            }}>
            {' '}
            VERIFIKASI AKUN
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const Style = StyleSheet.create({
  txtInput: {
    width: '80%',
    height: 40,
    padding: 5,
    borderRadius: 10,
    borderWidth: 4,
    borderColor: '#000',
    marginTop: 15,
    paddingStart: 15,
    borderColor: '#1C6758',
    color: 'black'
  },
});

export default Login;

import React, {useState} from 'react';
import {Image, Text, View, TextInput, TouchableOpacity, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import url from '../../GlobalUrl';


function Verifikasi() {
  const navigation = useNavigation();
  const [nisn, setNisn] = useState('');
  const [password, setPassword] = useState('');
  const [nama, setNama] = useState('');

  const handleSubmit = async () => {
    if (nisn === '' && password === '' && nama ===''){
      Alert.alert('Perhatian!', 'NISN, Password dan Nama tidak boleh kosong!')
    }
    await getData();
  }

  async function getData(){
    var formData = new FormData();
    formData.append('nisn', nisn);
    formData.append('password', password);
    formData.append('nama', nama);
    await axios
    .post(`${url}siswa/post_verifikasi.php`, 
    formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      }
    })
    .then(res => {
      if(res.data.status_code === 200 ){
        return Alert.alert('Successfully', 'Akun anda berhasil terverifikasi');
      } else {
        return Alert.alert('Failed', 'Data anda salah, harap periksa kembali');
      }
    })
    .catch(err => console.log('err = '+ err))
  }

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
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
                fontFamily: 'Montserrat-ExtraBold'
              }}>
              Y A P E R A
            </Text>
        <TextInput
          placeholder="NISN"
          placeholderTextColor={'#1C6758'}
          onChangeText={value => setNisn(value)}
          value={nisn}
          style={{
            width: '80%',
            height: 40,
            padding: 5,
            borderRadius: 10,
            borderWidth: 4,
            borderColor: '#000',
            marginTop: 20,
            paddingStart: 15,
            borderColor: '#1C6758',
            color: 'black'
          }}
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor={'#1C6758'}
          onChangeText={value => setPassword(value)}
          value={password}
          secureTextEntry={true}
          style={{
            width: '80%',
            height: 40,
            padding: 5,
            borderRadius: 10,
            borderWidth: 4,
            borderColor: '#000',
            marginTop: 10,
            paddingStart: 15,
            borderColor: '#1C6758',
            color: 'black'
          }}
        />
        <TextInput
          placeholder="Nama"
          placeholderTextColor={'#1C6758'}
          onChangeText={value => setNama(value)}
          value={nama}
          style={{
            width: '80%',
            height: 40,
            padding: 5,
            borderRadius: 10,
            borderWidth: 4,
            borderColor: '#000',
            marginTop: 10,
            paddingStart: 15,
            borderColor: '#1C6758',
            color: 'black'
          }}
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
              Verifikasi
            </Text>
          </View>
        </TouchableOpacity>
        <Text style={{fontWeight: 'bold', marginTop: 10, color: '#AFAFAF'}}>
          Sudah verifikasi akun?
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={{fontWeight: 'bold',  color: '#1C6758', marginTop: 5, fontSize: 20}}> MASUK </Text>
          </TouchableOpacity>
      </View>
    </View>
  );
}

export default Verifikasi;

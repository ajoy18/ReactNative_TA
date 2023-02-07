import React, {useEffect, useState} from 'react';
import {Alert, Image, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import {useSelector} from 'react-redux';
import url from '../../GlobalUrl';

function Start({route}) {
  const {param} = route.params;
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const {dataUser} = useSelector(state => state.globalVar);
  const [waktu, setWaktu] = useState(new Date());

  const handleSubmit = async () => {
    await axios
      .get(`${url}soal/get_waktu_soal.php?kategori=` + param, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + dataUser.token,
        },
      })
      .then( async (res) => {
        // console.log(res.data);
        var mulai = new Date(res.data.data[0].mulai);
        var berhenti = new Date(res.data.data[0].berhenti);

        if (waktu >= mulai && waktu <= berhenti) { 
          await getValidasi()
        } else {
          return Alert.alert('Perhatian!', 'Waktu pengerjaan soal belum dimulai');
        }
      })
      .catch(err => console.log('err =' + err));
  };

  const getValidasi = async () => {
    await axios.get(
      `${url}nilai/get_validasi_nilai.php?siswa_id=${dataUser.id_user}&kategori_soal=${param}`,
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + dataUser.token,
        },
      })
      .then(ress => {
        var nilai = ress.data.data;
        // console.log(ress.data);
        if(nilai !== null){
          return Alert.alert("Perhatian", "Anda sudah mengerjakan soal "+param)
        } else {
          return navigation.navigate('Halaman', {param: param});
        }
      })
      .catch(errr => console.log('errr = '+errr));
  }

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        padding: 10,
      }}>
      <View
        style={{
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {param === 'numerasi' ? (
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={require('../../images/img_numerasi.png')}
              style={{width: 220, height: 200}}
            />
            <Text
              style={{
                fontSize: 25,
                fontFamily: 'Montserrat-ExtraBold',
                color: '#1C6758',
                marginTop: 5,
              }}>
              NUMERASI
            </Text>
          </View>
        ) : (
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={require('../../images/img_literasi.png')}
              style={{width: 220, height: 200}}
            />
            <Text
              style={{
                fontSize: 25,
                fontFamily: 'Montserrat-ExtraBold',
                color: '#1C6758',
                marginTop: 5,
              }}>
              LITERASI
            </Text>
          </View>
        )}

        <TouchableOpacity
          style={{
            width: 150,
            height: 45,
            backgroundColor: '#1C6758',
            padding: 5,
            alignContent: 'center',
            alignItems: 'center',
            borderWidth: 2,
            borderRadius: 15,
            elevation: 10,
            marginTop: 15,
          }}
          onPress={() => handleSubmit()}>
          <Text
            style={{
              fontSize: 20,
              color: 'white',
            }}>
            Mulai
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Start;

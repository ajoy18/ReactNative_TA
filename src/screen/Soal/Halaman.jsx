import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
  BackHandler,
} from 'react-native';
import BottomSoal from '../component/BottomSoal';
import {useSelector} from 'react-redux';
import axios from 'axios';
import ItemJawaban from './ItemJawaban';
import {Item} from 'react-native-paper/lib/typescript/components/Drawer/Drawer';
import ItemSoal from './ItemSoal';
import {useNavigation} from '@react-navigation/native';
import url from '../../GlobalUrl';

function Halaman({route}) {
  const [tahun, setTahun] = useState('');
  const [hasilnilai, setHasilnilai] = useState('');
  const navigation = useNavigation();
  const {param} = route.params;
  const {dataUser} = useSelector(state => state.globalVar);
  const [soal, setSoal] = useState([]);
  const [dataSoalTerjawab, setDataSoalTerjawab] = useState([]);
  // const [nilai, setNilai] = useState(0);
  const [delay, setDelay] = useState(+20);
  // const jawaban = new Set();

  useEffect(() => {
    const backAction = () => {
      Alert.alert('Tahan!', 'Anda tidak bisa kembali saat mengerjakan soal', [
        {
          text: 'YES',
          onPress: () => null,
        },
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  useEffect(() => {
    const getData = async () => {
      await axios
        .get(`${url}soal/get_soal_siswa.php?kategori_soal=` + param, {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + dataUser.token,
          },
        })
        .then(res => {
          // console.log('data = ' + JSON.stringify(res.data.data));
          setSoal(res.data.data);
        })
        .catch(err => console.log('err = ' + err));
    };
    getData();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setDelay(delay - 1);
      console.log(delay - 1);
    }, 1000);

    if (delay === 0) {
      clearInterval(timer);
      return Alert.alert('Warning', 'Waktu telah habis', [{
        text: 'YES',
        onPress: () => {
          logicCount();
        }
      }])
    }

    return () => {
      clearInterval(timer);
    };
  });

  function handleFinish() {
    if (dataSoalTerjawab.length < 20) {
      return Alert.alert('Warning', 'Ada soal yang belum terjawab!', [
        {
          text: 'Batal',
          onPress: () => {},
        },
        {
          text: 'Kirim',
          onPress: () => {
            logicCount();
          },
        },
      ]);
    }

    return logicCount();
  }

  const logicCount = () => {
    var nilaiTemp = 0;
    dataSoalTerjawab.map(item => {
      item.map(items => {
        if (items.selected === true) {
          if (items.value === 'benar') {
            nilaiTemp += 5;
          }
        }
      });
    });
    postNilai(nilaiTemp);
    // console.log('nilai = ' + nilaiTemp);
    // console.log(JSON.stringify(dataSoalTerjawab));

    navigation.navigate('HalamanSelesai', {nilai: nilaiTemp});
  };

  async function postNilai(nilaiTemp) {
    var formData = new FormData();
    formData.append('siswa_id', dataUser.id_user);
    formData.append('nilai', nilaiTemp);
    formData.append('kategori_soal', param);
    await axios
      .post(`${url}nilai/post_data_nilai.php`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: 'Bearer ' + dataUser.token,
        },
      })
      .then(res => {
        console.log('berhasil' + res);
      })
      .catch(err => console.log('err = ' + err));
  }

  const handleStoreAnswer = value => {
    setDataSoalTerjawab([...dataSoalTerjawab, value]);
  };

  return (
    <View
      style={{
        flex: 1,
        padding: 10,
        backgroundColor: '#fff',
      }}>
      <ScrollView style={{marginBottom: 50}}>
        {soal.map((item, index) => (
          <View
            key={index}
            style={{
              backgroundColor: '#dfe6e9',
              borderRadius: 10,
              margin: 7,
              padding: 10,
            }}>
            <ItemSoal
              item={item}
              onChangeJawaban={value => handleStoreAnswer(value)}
            />
          </View>
        ))}
      </ScrollView>
      {/* <BottomSoal onHandleFinish={() => handleFinish()} /> */}
      <TouchableOpacity onPress={() => handleFinish()}>
        <View style={Style.btnSoal}>
          <View>
            <Text style={Style.text}>finish</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}
const Style = StyleSheet.create({
  btnSoal: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: '#1C6758',
    paddingVertical: 6,
    margin: 15,
    borderRadius: 15,
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
  },
  item: {
    alignItems: 'center',
  },
  text: {
    // fontFamily: 'Poppins-Medium',
    color: 'white',
    fontSize: 18,
  },
});

export default Halaman;

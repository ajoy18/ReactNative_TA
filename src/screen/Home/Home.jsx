import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Alert,
  BackHandler,
  ToastAndroid,
} from 'react-native';
import BottomNav from '../component/BottomNavigation';
import ModalView from '../component/Modal';
import Logout from '../Auth/Logout';
import {useDispatch} from 'react-redux';
import {storeUser} from '../../redux/features/GlobalVariable';

// useselector fungsinya untuk memanggil data
import {useNavigation} from '@react-navigation/native';

function Home() {
  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [modal3, setModal3] = useState(false);
  const [modal4, setModal4] = useState(false);
  const dispatch = useDispatch('');
  const navigation = useNavigation();
  let currentCount = 0;

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      doBackPressHandler,
    );

    return () => backHandler.remove();
  }, []);

  const doBackPressHandler = () => {
    if (navigation.isFocused()) {
      currentCount++;
      if (currentCount === 1) {
        ToastAndroid.showWithGravity(
          'Tekan Lagi Untuk Keluar Aplikasi !',
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM,
        );
      } else {
        BackHandler.exitApp();
      }
      setTimeout(() => {
        currentCount = 0;
      }, 2000);
    } else {
      navigation.goBack();
    }
    return true;
  };

  const handleLogout = () => {
    dispatch(
      storeUser({
        id_user: '',
        nama_user: '',
        nisn: '',
        token: '',
      }),
    );

    navigation.navigate('Login');
  };

  const handleShowModalLiterasi = () => {
    setModal1(!modal1);
  };

  const handleShowModalNumerasi = () => {
    setModal2(!modal2);
  };

  const handleShowModalNilai = () => {
    setModal3(!modal3);
  };

  const handleShowModalPanduan = () => {
    setModal4(!modal4);
  };

  return (
    <View style={{flex: 1, backgroundColor: '#FFF'}}>
      <View
        style={{
          alignItems: 'flex-end',
          marginRight: 25,
        }}>
        <Logout onChangeLogOut={() => handleLogout()} />
      </View>
      <View style={{padding: 10}}>
        <ModalView
          visible={modal1}
          txt={
            'Literasi membaca adalah kemampuan yang dimiliki oleh seseorang untuk memahami, menggunakan, mengevaluasi, dan merefleksikan berbagai macam teks tertulis untuk mengembangkan kapasitas individu sebagai warga negara Indonesia dan dunia, serta dapat berkontribusi secara produktif di masyarakat.'
          }
          onChange={() => handleShowModalLiterasi()}
        />
        <ModalView
          visible={modal2}
          txt={
            'Kemampuan numerasi adalah kemampuan berpikir yang dilakukan dengan menggunakan konsep, prosedur, fakta, dan alat matematika untuk menyelesaikan permasalahan-permasalahan yang ada di dalam kehidupan sehari-hari pada berbagai jenis konteks yang relevan untuk seorang individu sebagai warga negara Indonesia dan dunia. Kemampuan numerasi dan ilmu matematika adalah dua aspek yang tidak dapat dipisahkan. Kedua aspek tersebut dapat digunakan untuk menyelesaikan permasalahan-permasalahan yang ada di dalam kehidupan manusia.'
          }
          onChange={() => handleShowModalNumerasi()}
        />
        <ModalView
          visible={modal3}
          txt={
            'Nilai kurang dari 50 Membutuhkan Intervensi khusus. Nilai 50 - 69 Memiliki dasar. Nilai 70 - 89 Cakap. Nilai 90 ke atas Mahir'
          }
          onChange={() => handleShowModalNilai()}
        />
        <ModalView
          visible={modal4}
          txt={
            'SOAL : Ada 2 jenis macam soal pada aplikasi ini yaitu numerasi dan literasi, dimana setiap soal dikerjakan dalam waktu yang sudah ditentukan. pada pengerjaan soal ada batas waktu yang sudah diatur oleh admin.'
          }
          text={
            'NILAI : pada menu nilai, anda dapat melihat hasil nilai yang sudah anda kerjakan berdasarkan kategori soal dan tahun mengerjakannya'
          }
          onChange={() => handleShowModalPanduan()}
        />

        <TouchableOpacity onPress={() => handleShowModalPanduan()}>
          <View
            style={{
              backgroundColor: '#1C6758',
              borderRadius: 10,
              borderWidth: 2,
              padding: 10,
              alignItems: 'center',
              elevation: 10,
              margin: 10,
            }}>
            <Text
              style={{
                fontSize: 20,
                fontFamily: 'Montserrat-ExtraBold',
                color: '#fff',
              }}>
              PANDUAN
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleShowModalLiterasi()}>
          <View
            style={{
              backgroundColor: '#1C6758',
              borderRadius: 10,
              borderWidth: 2,
              padding: 10,
              alignItems: 'center',
              elevation: 10,
              margin: 10,
            }}>
            <Text
              style={{
                fontSize: 20,
                fontFamily: 'Montserrat-ExtraBold',
                color: '#fff',
              }}>
              LITERASI
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleShowModalNumerasi()}>
          <View
            style={{
              backgroundColor: '#1C6758',
              borderRadius: 10,
              borderWidth: 2,
              padding: 10,
              alignItems: 'center',
              elevation: 10,
              margin: 10,
            }}>
            <Text
              style={{
                fontSize: 20,
                fontFamily: 'Montserrat-ExtraBold',
                color: '#fff',
              }}>
              NUMERASI
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleShowModalNilai()}>
          <View
            style={{
              backgroundColor: '#1C6758',
              borderRadius: 10,
              borderWidth: 2,
              padding: 10,
              alignItems: 'center',
              elevation: 10,
              margin: 10,
            }}>
            <Text
              style={{
                fontSize: 20,
                fontFamily: 'Montserrat-ExtraBold',
                color: '#fff',
              }}>
              TENTANG NILAI
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <BottomNav />
    </View>
  );
}

export default Home;

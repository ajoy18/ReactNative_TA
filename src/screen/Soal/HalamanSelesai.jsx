import React, {Fragment, useEffect} from 'react';
import {BackHandler, Text, View} from 'react-native';
import BottomNav from '../component/BottomNavigation';
import {useNavigation} from '@react-navigation/native';


function HalamanSelesai({route}) {
  const navigation = useNavigation();
  useEffect(() => {
    const backAction = () => {
      navigation.navigate("Home")
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  const {nilai} = route.params;
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
      }}>
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: 25,
            color: '#1C6758',
            marginTop: 8,
            fontFamily: 'Montserrat-ExtraBold',
          }}>
          Nilai Anda = {nilai}
        </Text>
      </View>
      <BottomNav />
    </View>
  );
}

export default HalamanSelesai;

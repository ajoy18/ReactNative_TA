import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import BottomNav from '../component/BottomNavigation';
import {useNavigation} from '@react-navigation/native';

function Soal() {
  const navigation = useNavigation();

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
        <View>
          <TouchableOpacity
            style={{
              alignContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => navigation.navigate('Start',{param: 'numerasi'})}>
            <Image
              source={require('../../images/img_numerasi.png')}
              style={{width: 220, height: 200}}
            />
            <Text
              style={{
                fontSize: 25,              
                color: '#1C6758',
                marginTop: 8,
                fontFamily: 'Montserrat-ExtraBold'
              }}>
              NUMERASI
            </Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            style={{
              alignContent: 'center',
              alignItems: 'center',
              marginTop: 25
            }}
            onPress={() => navigation.navigate('Start',{param: 'literasi'})}>
            <Image
              source={require('../../images/img_literasi.png')}
              style={{width: 220, height: 200}}
            />
            <Text
              style={{
                fontSize: 25,
                fontFamily: 'Montserrat-ExtraBold',
                color: '#1C6758',
                marginTop: 5
              }}>
              LITERASI
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <BottomNav />
    </View>
  );
}

export default Soal;

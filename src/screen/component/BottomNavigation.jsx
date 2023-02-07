import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

function BottomNav() {
  const navigation = useNavigation();

  return (
    <View style={Style.btnContainer}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <View style={Style.item}>
          <Icon name="home" size={30} color="#fff" />
          <Text style={Style.text}>Beranda</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Soal')}>
        <View style={Style.item}>
          <Icon name="newspaper" size={30} color="#fff" />
          <Text style={Style.text}>Soal</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Nilai')}>
        <View style={Style.item}>
          <Icon name="document" size={30} color="#fff" />
          <Text style={Style.text}>Nilai</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const Style = StyleSheet.create({
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: '#1C6758',
    paddingVertical: 6,
    margin: 15,
    borderRadius: 25,
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 7
  },
  item: {
    alignItems: 'center',
  },
  text: {
    // fontFamily: 'Poppins-Medium',
    color: 'white',
  },
});

export default BottomNav;

import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

function BottomSoal({onHandleFinish}) {
  return (
    <TouchableOpacity onPress={() => onHandleFinish()}>
      <View style={Style.btnSoal}>
        <View>
          <Text style={Style.text}>finish</Text>
        </View>
      </View>
    </TouchableOpacity>
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

export default BottomSoal;

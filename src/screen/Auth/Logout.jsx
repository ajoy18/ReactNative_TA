import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';

function Logout({onChangeLogOut}) {

  const handleSubmit = () => {
    onChangeLogOut();
  };

  return (
    <View style={{
        height: 40,
        width: 100,
        backgroundColor: '#1C6758',
        padding: 5,
        alignItems: 'center',
        elevation: 5,
        borderWidth: 1,
        borderRadius: 10
      }}>
       
    <TouchableOpacity      
      onPress={() => handleSubmit()}>
      <Text
        style={{
          fontSize: 20,
          color: 'white',
        }}>
        Keluar
      </Text>
    </TouchableOpacity>
    </View>
  );
}

export default Logout;

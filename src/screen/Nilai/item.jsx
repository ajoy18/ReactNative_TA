import React from 'react';
import {Text, View} from 'react-native';

function ItemNilai({data}) {
  return (
    <View>
      {data.map((item, index) => (
        <View
          key={index}
          style={{
            marginTop: 30,
            backgroundColor: '#1C6758',
            width: '90%',
            height: 200,
            borderWidth: 1,
            elevation: 15,
            padding: 10,
            borderRadius: 15,
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 18,
              fontWeight: 'bold',
            }}>
            Tahun : {item.tahun}
          </Text>
          <Text
            style={{
              color: 'white',
              fontSize: 18,
              fontWeight: 'bold',
            }}>
            Numerasi : {item.data_nilai[0].nilai}
          </Text>
          <Text
            style={{
              color: 'white',
              fontSize: 18,
              fontWeight: 'bold',
            }}>
            Literasi : {item.data_nilai[1].nilai}
          </Text>
          <Text
            style={{
              color: 'white',
              fontSize: 18,
              fontWeight: 'bold',
            }}>
            Detil : {item.detail}
          </Text>
        </View>
      ))}
    </View>
  );
}

export default ItemNilai;

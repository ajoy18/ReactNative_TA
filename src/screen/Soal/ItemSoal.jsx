import React, {Fragment} from 'react';
import {Image, Text, View} from 'react-native';
import ItemJawaban from './ItemJawaban';
import RadioGroup from 'react-native-radio-buttons-group';
import url from '../../GlobalUrl';

function ItemSoal({item, onChangeJawaban}) {

  function onPressHandle(value) {
    onChangeJawaban(value);
  }
  // console.log('data = ' + JSON.stringify(item.jawaban));

  return (
    <Fragment>
      {item.gambar !== '' && (
        <View
          style={{
            borderWidth: 3,
            borderColor: '#1C6758',
            elevation: 2,
          }}>
          <Image
            source={{
              uri: `${url}soal/image/${item.gambar}`,
            }}
            style={{
              width: '100%',
              height: 400,
            }}
          />
        </View>
      )}

      <Text style={{marginTop: 10, textAlign: 'justify', color: 'black'}}>
        {item.soal_txt}
      </Text>

      <View
        style={{
          justifyContent: 'flex-start',
          alignSelf: 'flex-start',
          marginTop: 10,
          width: '90%',
          // alignItems: 'flex-start'
          // marginBottom: 50,
        }}>

        <RadioGroup style={{alignSelf: 'start-flex'}} radioButtons={item.jawaban} onPress={onPressHandle} />
        
      </View>
    </Fragment>
  );
}

export default ItemSoal;

import React, {Fragment} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {RadioButton} from 'react-native-paper';

function ItemJawaban({item, selected, callback}) {
  // console.log("item = "+JSON.stringify(item));
  return (
  
    <Fragment>
      <View style={{flexDirection: 'row'}}>
        <RadioButton 
          value={3}
          status={selected}
          onPress={() => callback(item.key, item.number)}
        />
        <Text style={styles.text}>{item.jawaban_txt}</Text>
      </View>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  text: {
    marginTop: 8,
    color: 'black',
  },
});
export default ItemJawaban;

import React from 'react';
import Modal from 'react-native-modal';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';

function ModalView({visible, txt, text, onChange}) {
  return (
    <Modal isVisible={visible}>
      <View style={{flex: 1, justifyContent: 'center', alignSelf: 'center'}}>
        <View
          style={{
            backgroundColor: 'rgba(255, 230, 175, 0.9)',
            width: 340,
            justifyContent:'flex-start',
            borderRadius: 16,
            padding: 16,
          }}>
          <View>       
              <Text
                style={{fontWeight: 'semi-bold', fontSize: 18, color: '#000'}}
              >{txt}</Text>           
              <Text
                style={{fontWeight: 'semi-bold', fontSize: 18, color: '#000'}}
              >{text}</Text>           
            <TouchableOpacity onPress={() => onChange()}>
              <View>
                <Text
                  style={{
                    textAlign: 'center',
                    marginTop: 10,
                    fontWeight: 'bold',
                    color: '#000'
                  }}>
                  Kembali
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default ModalView;

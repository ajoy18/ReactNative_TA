import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './screen/Auth/Login';
import Home from './screen/Home/Home';
import Soal from './screen/Soal/Soal';
import Nilai from './screen/Nilai/Nilai';
import Start from './screen/Soal/Start';
import Halaman from './screen/Soal/Halaman';
import Verifikasi from './screen/Auth/Verifikasi';
import HalamanSelesai from './screen/Soal/HalamanSelesai';
import {Provider} from 'react-redux';
import { store } from './redux/store/store';

const Stack = createNativeStackNavigator();

function Route() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Soal" component={Soal} />
          <Stack.Screen name="Nilai" component={Nilai} />
          <Stack.Screen name="Start" component={Start} />
          <Stack.Screen name="Halaman" component={Halaman} />
          <Stack.Screen name="Verifikasi" component={Verifikasi} />
          <Stack.Screen name="HalamanSelesai" component={HalamanSelesai} />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}

// function MenuSetting() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Setting" component="Login" />
//     </Stack.Navigator>
//   );
// }

export default Route;

import { Roboto_400Regular, Roboto_700Bold, useFonts } from '@expo-google-fonts/roboto';
import { StatusBar, View } from 'react-native';
import { NativeBaseProvider } from "native-base";
import {theme} from 'src/theme/index'

import { Loading } from '@components/Loading';
import { Routes } from '@routes/index';



export default function App() {
  const [fontLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (

    <NativeBaseProvider theme={theme}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor='transparent'
        translucent
      />

      { fontLoaded ? <Routes /> : <Loading /> }


    </NativeBaseProvider>
  );
}
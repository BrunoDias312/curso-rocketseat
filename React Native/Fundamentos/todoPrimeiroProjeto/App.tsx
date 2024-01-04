import { StyleSheet, SafeAreaView } from 'react-native';
import { StatusBar } from 'react-native'
import { Home } from './src/components/screen/Home/index'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'dark-content'} hidden/>
      <Home/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

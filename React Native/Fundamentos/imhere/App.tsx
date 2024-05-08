import { Home } from './src/screens/Home/index'
import { StatusBar } from 'react-native'
// View = Div

export default function App() {
  return (
    <>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={'transparent'}
        translucent // deixar a statusbar sobreposta na aplicação
      />
      <Home />
    </>
  )
}

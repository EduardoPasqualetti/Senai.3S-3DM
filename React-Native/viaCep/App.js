
import { useFonts, Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { Header } from './src/components/Header/Index';
import { Home } from './src/screens/Home';
import { ContainerApp } from './styles';
import { Platform } from 'react-native';




export default function App() {
  const[fontsLoaded, fontError] = useFonts({
    Roboto_500Medium,
    Roboto_700Bold
  })

  if (!fontsLoaded && !fontError) {
    return null
  }

  return (
    <ContainerApp behavior={Platform.OS == "ios" ? "padding" : "height"}
    >
      <Header/>
      <Home/>
    </ContainerApp>
  );
}

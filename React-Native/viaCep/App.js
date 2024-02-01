
import { useFonts, Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { Header } from './src/components/Header/Index';
import { Home } from './src/screens/Home';
import { ContainerApp } from './styles';




export default function App() {
  const[] = useFonts({
    Roboto_500Medium,
    Roboto_700Bold
  })

  return (
    <ContainerApp>
      <Header/>
      <Home/>
    </ContainerApp>
  );
}

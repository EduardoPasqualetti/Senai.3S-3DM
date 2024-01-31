
import { useFonts, Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { ContainerApp } from './src/components/Container/Container';
import { Header } from './src/components/Header/Index';
import { Home } from './src/screens/Home';




export default function App() {
  const[] = useFonts({
    Roboto_500Medium,
    Roboto_700Bold
  })

  return (
    <ContainerApp>
      <Header></Header>

      <Home/>
    </ContainerApp>
  );
}

import { View } from 'react-native';
import { Category } from '../components/Category';
import { Header } from '../components/Header';


export default function Home() {
  return (
    <View className="flex-1 pt-8" >
      <Header title='Faça seu pedido' cartQuantityItems={5} />
      <View className='flex-row'>
        <Category title='Lanche do dia' />
      </View>
    </View>
  );
}
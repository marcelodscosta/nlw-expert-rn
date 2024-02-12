import { Button } from '@/components/Button';
import { PRODUCTS } from '@/utils/data/products';
import { formatCurrency } from '@/utils/functions/format-currency';
import { useLocalSearchParams } from 'expo-router';
import { Image, Text, View } from "react-native";

import { LinkButton } from '@/components/Link-Button';
import { Feather } from '@expo/vector-icons';

type ProductProps = {
  id: string,
};

export default function Product() {

  const { id } = useLocalSearchParams<ProductProps>();

  const product = PRODUCTS.filter((item) => item.id === id)[0]
  console.log(product);

  return (
    <View className="flex-1">
      <Image
        source={product.cover}
        className='w-full h-52'
        resizeMode='cover'
      />

      <View className='p-5 mt-8 flex-1'>
        <Text className='text-lime-400 text-2xl font-heading my-2'>{formatCurrency(product.price)}</Text>

        <Text className='text-slate-400 font-body text-base mb-6'>{product.description}</Text>

        {product.ingredients.map((item) => (
          <Text className='text-slate-400 font-body text-base' key={item}>
            {"\u2022"}{item}
          </Text>
        ))}
      </View>
      <View className='p-5 pb-8 gap-5'>
        <Button>
          <Button.Icon>
            <Feather name='plus-circle' size={20} />
          </Button.Icon>
          <Button.Text>
            Adicionar ao pedido
          </Button.Text>
        </Button>

        <LinkButton title='Voltar ao cardápio' href='/' />
      </View>

    </View>

  );
};
import { useRef, useState } from 'react';
import { FlatList, SectionList, Text, View } from 'react-native';

import { Link } from 'expo-router';

import { Header } from '@/components/Header';

import { Category } from '@/components/Category';

import { Product } from '@/components/Product';
import { useCartStore } from '@/stores/cart-store';
import { CATEGORIES, MENU, ProductProps } from '@/utils/data/products';


export default function Home() {

  const cartStore = useCartStore();

  const [category, setCategory] = useState(CATEGORIES[0]);

  const sectionListRef = useRef<SectionList<ProductProps>>(null);

  const cartQuantityItems = cartStore.products.reduce((total, product) => total + product.quantity, 0)


  const handleCategorySelect = (selectedCategory: string) => {
    setCategory(selectedCategory);
    const sectionIndex = CATEGORIES.findIndex((item) => item === selectedCategory);

    if (sectionListRef.current) {
      sectionListRef.current.scrollToLocation({ animated: true, sectionIndex, itemIndex: 0 })
    }

  };


  return (
    <View className="flex-1 pt-8" >
      <Header title='Faça seu pedido' cartQuantityItems={cartQuantityItems} />

      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item}
        renderItem={
          ({ item }) =>
            (<Category title={item} isSelected={item === category} onPress={() => handleCategorySelect(item)} />)
        }
        horizontal
        className='max-h-10 mt-5'
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 12, paddingHorizontal: 20 }}
      />

      <SectionList
        ref={sectionListRef}
        sections={MENU}
        keyExtractor={(item) => item.id}
        stickySectionHeadersEnabled={false}
        renderItem={({ item }) => (
          <Link href={`/product/${item.id}`} asChild>
            <Product data={item} />
          </Link>
        )}
        renderSectionHeader={({ section: { title } }) =>
          <Text className='text-white text-xl font-heading mt-8 mb-3'>{title}</Text>}
        className='flex-1 p-5'
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      />

    </View>
  );
}
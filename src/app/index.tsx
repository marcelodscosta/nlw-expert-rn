import { useRef, useState } from 'react';
import { FlatList, SectionList, Text, View } from 'react-native';

import { Header } from '@/components/Header';

import { Category } from '@/components/Category';

import { Product } from '@/components/Product';
import { CATEGORIES, MENU } from '@/utils/data/products';


export default function Home() {

  const [category, setCategory] = useState(CATEGORIES[0]);

  const sectionListRef = useRef<SectionList>(null)

  const handleCategorySelect = (selectedCategory: string) => {
    setCategory(selectedCategory);
    const sectionIndex = CATEGORIES.findIndex((item) => item === selectedCategory);

    if (sectionListRef.current) {
      sectionListRef.current.scrollToLocation({ animated: true, sectionIndex, itemIndex: 0 })
    }

  };


  return (
    <View className="flex-1 pt-8" >
      <Header title='Faça seu pedido' cartQuantityItems={5} />

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
          <Product data={item} />
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